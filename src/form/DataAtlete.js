import React from "react";
import './dataAtlete.css';
import { useState } from "react";


const DataAtlete = () => {
    const [newElement, setNewElement] = useState(" ");
    const [showWizardElement, setShowWizardElement] = useState(false);
    const [showNewElementDetails, setShowNewElementDetails] = useState(false);
    const [goe, setGoe] = useState(3);
    const [element, setElement] = useState({});
    const [showRecapElement, setShowRecapElement] = useState(false);
    const [showCompleteElement, setShowCompleteElement] = useState(false);
    const [elementArray, setElementArray] = useState([{
        "name": "name jump",
        "execution": "value jump",
        "under": "titleUnder",
        "goe": "goe",
        "totalElement": "totalElement"
    }]);
    const [total, setTotal] = useState(0);
    const [underActive, setUnderActive] = useState(false);

    const jump = [
        {
            "name": "axel",
            "value": 1.5,
            "type": [
                {
                    "name": "",
                    "value": 1
                },
                {
                    "name": "double",
                    "value": 2
                },
                {
                    "name": "triple",
                    "value": 3
                },
                {
                    "name": "quadruple",
                    "value": 4
                }
            ]
        },
        {
            "name": "Salkov",
            "value": 2,
            "type": [
                {
                    "name": "",
                    "value": 1
                },
                {
                    "name": "double",
                    "value": 2
                },
                {
                    "name": "triple",
                    "value": 3
                },
                {
                    "name": "quadruple",
                    "value": 4
                }
            ]
        },
        {
            "name": "Salto del 3",
            "value": 1,
            "type": [
                {
                    "name": "",
                    "value": 1
                },
                {
                    "name": "double",
                    "value": 2
                },
                {
                    "name": "triple",
                    "value": 3
                },
                {
                    "name": "quadruple",
                    "value": 4
                }
            ]
        }
    ]

    const addElement = (typeName, typeValue, elementName, elementValue) => {
        //alert("hai eseguito un: " + typeName + " " + elementName + ". E hai totalizzato : " + (elementValue * typeValue) + "punti")
        setNewElement(false)

        setElement({
            "name": typeName + elementName,
            "value": typeValue * elementValue
        })
        setShowWizardElement(false);
        setShowRecapElement(true);
    }

    const cahngeGOE = (e) => {
        setGoe(e.target.value)
    }
    const changeElementValue = (e) => {
        if (e.target.value !== "default") {
            console.log(e.target.value)
            setNewElement(e.target.value)
            setShowNewElementDetails(true)
        } else {
            setNewElement("")
        }
    }

    const sendElement = () => {
        if (goe < 3 && goe > -3) {
            let points = goe * element.value;
            if(underActive === true) {
                points = points - 0.5
            }
            let completeElement = {
                "name": element.name,
                "execution": element.value,
                "under": underActive,
                "goe": goe,
                "totalElement": points
            }
            setTotal(total + points)
            setElementArray([...elementArray, completeElement])
            setShowWizardElement(false);
            setShowRecapElement(false);
            setShowCompleteElement(true);
            setUnderActive(false)
            setGoe(3);
        } else {
            alert("Error in the insert data")
        }
    }

    const pedro = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div className="rowNameAtlete">
                <label>Name</label>
                <input type="text"></input>
                <label>Surname</label>
                <input type="text"></input>
            </div>

            <div className="buttonNewElement"
                onClick={() => setShowWizardElement(true)}>+</div>

            {(showWizardElement === true ?
                <div>
                    <div className="wizardElements">
                        <label>Elemento</label>
                        <select
                            onChange={e => changeElementValue(e)}>
                            <option value="default">Select an option</option>
                            <option value="Jump">Jump</option>
                            <option value="Combo">Combo</option>
                            <option value="ChSq">ChSq</option>
                            <option value="StSq">StSq</option>
                            <option value="Trottole">Trottole</option>
                        </select>

                    </div>
                    {(newElement === "Jump" ?
                        <div className="elementDetailsContainer">
                            {jump.map((j) => {
                                return (
                                    <div className="containerFlex">
                                        <div>
                                            {j.type.map((t) => {
                                                return (
                                                    <div className="elementDetail"
                                                        onClick={() => addElement(t.name, t.value, j.name, j.value)}>{t.name}{j.name}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div> :
                        <div>
                        </div>)}

                </div> :
                <div></div>
            )}

            {(showRecapElement === true ?
                <div className="recapElementContainer">
                    <p className="elementRecap">
                        Element: {element.name}
                    </p>
                    <div className="elementRecap">
                    <label>Goe: </label>
                    <input
                        min="-2"
                        max="2"
                        type="number"
                        onChange={e => cahngeGOE(e)}>
                    </input>
                    </div>
                    <div className="elementRecap">
                    <label>Under:</label>
                    {(underActive === true ? 
                    <div className="checkboxUnderElementActive"
                    onClick={() => setUnderActive(!underActive)}></div>: 
                     <div className="checkboxUnderElement"
                     onClick={() => setUnderActive(!underActive)}></div>
                     )}
                    </div>
                    <div
                        onClick={() => sendElement()} className="buttonSendElement">Send</div>

                </div> :
                <div></div>
            )}

            <div className="elementsCompleted">

                {(showCompleteElement === true ?
                    <div>
                        {elementArray.map((ele) => {

                            return (
                                <div className="rowTableElement">
                                    <div className="cellTableFirstElement">
                                        {ele.name}
                                    </div>
                                    <div className="cellTableElement">
                                        {ele.execution}
                                    </div>
                                    <div className="cellTableElement">
                                        {(ele.under === "titleUnder" ? "Under" : (ele.under === true) ? "Yes" : "No")}
                                    </div>
                                    <div className="cellTableElement">
                                        {ele.goe}
                                    </div>
                                    <div className="cellTableElement">
                                        {ele.totalElement}
                                        </div>
                                </div>
                            )
                        })}
                        <div className="totalPoint">
                            Total: {total}
                        </div>
                    </div> :
                    <div>Add firstElement</div>)
                }
            </div>




        </div>
    )
}

export default DataAtlete;