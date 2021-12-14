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
        "name": "Element",
        "value": "Value Element",
        "goe": "G.O.E."
    }]);
    const [total, setTotal] = useState(0);

    const jump = [
        {
            "name": "base",
            "value": [
                {
                    "name": "Zero",
                    "value": 0,
                    "valueGoe2": 0,
                    "valueGoe1": 0,
                    "valueGoeN1": 0,
                    "valueGoeN2": 0
                },
                {
                    "name": "W",
                    "value": 0.5,
                    "valueGoe2": 1,
                    "valueGoe1": 0.75,
                    "valueGoeN1": 0.25,
                    "valueGoeN2": 0
                },
                {
                    "name": "A",
                    "value": 3,
                    "valueGoe2": 4.5,
                    "valueGoe1": 4,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.5
                },
                {
                    "name": "A<",
                    "value": 1.5,
                    "valueGoe2": 2.5,
                    "valueGoe1": 2,
                    "valueGoeN1": 1,
                    "valueGoeN2": 0.75
                },

            ]
        },
        {
            "name": "t",
            "value": [
                {
                    "name": "1T",
                    "value": 0.5,
                    "valueGoe2": 1,
                    "valueGoe1": 0.75,
                    "valueGoeN1": 0.25,
                    "valueGoeN2": 0
                },
                {
                    "name": "1T<",
                    "value": 0.5,
                    "valueGoe2": 1,
                    "valueGoe1": 0.75,
                    "valueGoeN1": 0.25,
                    "valueGoeN2": 0
                },
                {
                    "name": "2T",
                    "value": 3,
                    "valueGoe2": 4.5,
                    "valueGoe1": 4,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.5
                },
                {
                    "name": "2T<",
                    "value": 1.5,
                    "valueGoe2": 2.5,
                    "valueGoe1": 2,
                    "valueGoeN1": 1,
                    "valueGoeN2": 0.75
                },

            ]
        },,
        {
            "name": "s",
            "value": [
                {
                    "name": "1S",
                    "value": 0.5,
                    "valueGoe2": 1,
                    "valueGoe1": 0.75,
                    "valueGoeN1": 0.25,
                    "valueGoeN2": 0
                },
                {
                    "name": "1S<",
                    "value": 0.5,
                    "valueGoe2": 1,
                    "valueGoe1": 0.75,
                    "valueGoeN1": 0.25,
                    "valueGoeN2": 0
                },
                {
                    "name": "2S",
                    "value": 3,
                    "valueGoe2": 4.5,
                    "valueGoe1": 4,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.5
                },
                {
                    "name": "2S<",
                    "value": 1.5,
                    "valueGoe2": 2.5,
                    "valueGoe1": 2,
                    "valueGoeN1": 1,
                    "valueGoeN2": 0.75
                },

            ]
        },,
        {
            "name": "Lo",
            "value": [
                {
                    "name": "1Lo",
                    "value": 1.5,
                    "valueGoe2": 2,
                    "valueGoe1": 1.75,
                    "valueGoeN1": 1.25,
                    "valueGoeN2": 1
                },
                {
                    "name": "1Lo<",
                    "value": 0.75,
                    "valueGoe2": 1.25,
                    "valueGoe1": 1,
                    "valueGoeN1": 0.5,
                    "valueGoeN2": 0.25
                },
                {
                    "name": "2Lo",
                    "value": 5,
                    "valueGoe2": 6.5,
                    "valueGoe1": 6,
                    "valueGoeN1": 4,
                    "valueGoeN2": 2.5
                },
                {
                    "name": "2Lo<",
                    "value": 2.5,
                    "valueGoe2": 3.5,
                    "valueGoe1": 3,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.25
                },

            ]
        },,
        {
            "name": "F",
            "value": [
                {
                    "name": "1F",
                    "value": 2,
                    "valueGoe2": 2.5,
                    "valueGoe1": 2.25,
                    "valueGoeN1": 1.75,
                    "valueGoeN2": 1.5
                },
                {
                    "name": "1F<",
                    "value": 1,
                    "valueGoe2": 1.5,
                    "valueGoe1": 1.25,
                    "valueGoeN1": 0.75,
                    "valueGoeN2": 0.5
                },
                {
                    "name": "2T",
                    "value": 5,
                    "valueGoe2": 6.5,
                    "valueGoe1": 6,
                    "valueGoeN1": 4,
                    "valueGoeN2": 2.5
                },
                {
                    "name": "2F<",
                    "value": 2.5,
                    "valueGoe2": 3.5,
                    "valueGoe1": 3,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.25
                },

            ]
        },,
        {
            "name": "Lz",
            "value": [
                {
                    "name": "1Lz",
                    "value": 2,
                    "valueGoe2": 2.5,
                    "valueGoe1": 2.25,
                    "valueGoeN1": 1.75,
                    "valueGoeN2": 1.5
                },
                {
                    "name": "1Lz<",
                    "value": 1,
                    "valueGoe2": 1.5,
                    "valueGoe1": 1.25,
                    "valueGoeN1": 0.75,
                    "valueGoeN2": 0.5
                },
                {
                    "name": "2Lz",
                    "value": 5,
                    "valueGoe2": 6.5,
                    "valueGoe1": 6,
                    "valueGoeN1": 4,
                    "valueGoeN2": 2.5
                },
                {
                    "name": "2Lz<",
                    "value": 2.5,
                    "valueGoe2": 3.5,
                    "valueGoe1": 3,
                    "valueGoeN1": 2,
                    "valueGoeN2": 1.25
                },

            ]
        }
        

    ]

    const addElement = (e) => {
        //alert("hai eseguito un: " + typeName + " " + elementName + ". E hai totalizzato : " + (elementValue * typeValue) + "punti")
        setNewElement(false)

        setElement(e)
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
            let completeElement = {
                "name": element.name,
                "execution": element.value,
                "goe": goe,
            }

            switch (goe) {
                case "2":
                     completeElement = {
                        "name": element.name,
                        "value": element.valueGoe2,
                        "goe": goe
                    }
                    console.log(total)
                    console.log(completeElement.value)
                    setTotal(total + element.valueGoe2)
                    break
                case "1":
                     completeElement = {
                        "name": element.name,
                        "value": element.valueGoe1,
                        "goe": goe
                    }
                    setTotal(total + element.valueGoe1)
                    break
            }


            setElementArray([...elementArray, completeElement])
            setShowWizardElement(false);
            setShowRecapElement(false);
            setShowCompleteElement(true);
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
            <div className="rowNameAtlete" hidden>
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
                                            {j.value.map((e) => {
                                                return (
                                                    <div className="elementDetail"
                                                        onClick={() => addElement(e)}>{e.name}</div>
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
                                        {ele.value}
                                    </div>
                                    <div className="cellTableElement">
                                        {ele.goe}
                                    </div>
                                </div>
                            )
                        })}
                        <div className="totalPoint">
                            Total: {total}
                        </div>
                    </div> :
                    <div></div>)
                }
            </div>




        </div>
    )
}

export default DataAtlete;