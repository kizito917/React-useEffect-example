import { useState, useEffect } from 'react';
import './Index.css';
import { data } from "../utils/data";

function Index() {
    const [title, setTitle] = useState("Our Tours")
    const [info, setInfo] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        setInfo(data)
    }, [])
    
    const updateArr = (val) => {
        for (let i = 0; i < info.length; i++) {
            if (info[i].id === val) {
              info.splice(i, 1);
              break;
            }
        }
        const newArray = info
        if (newArray.length < 1) {
            setTitle("No Tours Left")
            setIsEmpty(true)
        }
        setInfo([...newArray])
    }

    const refreshData = () => {
        setTitle("Loading...")
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }

    return <>
        <div className="index-content">
            <h1>{title}</h1>
            <div className="underline"></div>
            {
                isEmpty ? <button onClick={refreshData} className="btn">Refresh</button> : <p></p>
            }   
            <div>
                {
                    info.map((data) => {
                        return (
                            <div className="card-content" key={data.id}>
                                <div className="card">
                                    <img src={data.img} alt={data.name} />
                                    <div className="card__content">
                                        <div className="card__content__title">
                                            <div className="card__content__name">
                                                <h4>{data.name}</h4>
                                            </div>
                                            <div className="card__content__title__price">
                                                <h5>{data.price}</h5>
                                            </div>
                                        </div>
                                        <div className="card__content__desc">
                                            <p>{data.desc}</p>
                                        </div>
                                        <div className="card__content__action">
                                            <button onClick={() => updateArr(data.id)}>Not Interested</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default Index;