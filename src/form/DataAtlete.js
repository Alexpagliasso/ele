import React from "react";
import './dataAtlete.css';
import { useState } from "react";
import Jump from "./json/Jump.json";
import Sequence from "./json/Sequence.json";
import StepSequence from "./json/StepSequences.json";
import Spin from "./json/Spin.json";
import ComboSpin from "./json/ComboSpin.json";

const DataAtlete = () => {
    const [newElement, setNewElement] = useState(" ");
    const [showWizardElement, setShowWizardElement] = useState(true);
    const [showNewElementDetails, setShowNewElementDetails] = useState(false);
    const [goe, setGoe] = useState(0);
    const [element, setElement] = useState({});
    const [showRecapElement, setShowRecapElement] = useState(false);
    const [showCompleteElement, setShowCompleteElement] = useState(false);
    const [elementArray, setElementArray] = useState([{
        "name": "Element",
        "value": "Value Element",
        "goe": "G.O.E."
    }]);
    const [total, setTotal] = useState(0);
    const [send, setSend] = useState(false);
    const [component, setComponent] = useState(false)
    const arrayComponent = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
    const [componentPerformanceValue, setComponentPerformanceValue] = useState(0)

    let jump = Jump
    let sequence = Sequence
    let stepSequence = StepSequence
    let spin = Spin
    let comboSpin = ComboSpin

    const addElement = (e) => {
        setNewElement(false)
        setElement(e)
        //setShowWizardElement(false);
        setShowRecapElement(true);
    }

    const setComponentValue = (c) => {
        setComponentPerformanceValue(c);
        setComponent(false)
    }



    const sendElement = (e) => {
        console.log(e)

        if (e === null) {
            let completeElement = {
                "name": "fall",
                "execution": 0,
                "goe": e,
            }
            setElementArray([...elementArray, completeElement])
            setShowRecapElement(false);
            setShowCompleteElement(true);
            setSend(true)
        } else {
            if (e < 3 && e > -3) {
                let completeElement = {
                    "name": element.name,
                    "execution": element.value,
                    "goe": e,
                }

                switch (e) {
                    case 2:
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoe2,
                            "goe": e
                        }
                        console.log(total)
                        console.log(completeElement.value)
                        setTotal(total + element.valueGoe2)
                        break
                    case 1:
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoe1,
                            "goe": e
                        }
                        setTotal(total + element.valueGoe1)
                        break
                    case 0:
                        completeElement = {
                            "name": element.name,
                            "value": element.value,
                            "goe": e
                        }
                        setTotal(total + element.value)
                        break
                    case -1:
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoeN1,
                            "goe": e
                        }
                        setTotal(total + element.valueGoeN1)
                        break
                    case -2:
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoeN2,
                            "goe": e
                        }
                        setTotal(total + element.valueGoeN2)
                        break
                }


                setElementArray([...elementArray, completeElement])
                setShowRecapElement(false);
                setShowCompleteElement(true);
                setSend(true)
            } else {
                alert("Error in the insert data")
            }
        }
    }

    const pedro = (e) => {
        console.log(e)
    }
    const addFall = () => {
        console.log("pippo")
        setTotal(total - 1)
        sendElement(
            null)
    }
    return (
        <div>
            <div className="rowNameAtlete" hidden>
                <label>Name</label>
                <input type="text"></input>
                <label>Surname</label>
                <input type="text"></input>
            </div>

            <div className="buttonFall"
                onClick={() => { addFall() }}>FALL</div>
            {(showWizardElement === true ?
                <div>
                    <div className="wizardElements">
                        <div className="buttonSendElement" onClick={() => setNewElement("Jump")}>Jump</div>
                        <div className="buttonSendElement" onClick={() => setNewElement("Combo")}>Combo</div>
                        <div className="buttonSendElement" onClick={() => setNewElement("ChSq")}>ChSq</div>
                        <div className="buttonSendElement" onClick={() => setNewElement("StSq")}>StSq</div>
                        <div className="buttonSendElement" onClick={() => setNewElement("Spin")}>Spin</div>
                        <div className="buttonSendElement" onClick={() => setNewElement("CoSpin")}>CoSpin</div>
                    </div>
                    {(newElement === "Jump" ?
                        <div className="elementDetailsContainer">
                            {jump.map((j) => {
                                return (
                                    <div className="containerFlex">
                                        {j.value.map((e) => {
                                            return (
                                                <div className="elementDetail"
                                                    onClick={() => addElement(e)}>{e.name}</div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div> :
                        (newElement === "ChSq" ?
                            <div className="elementDetailsContainer">
                                <div className="containerFlex">
                                    <div className="elementDetail"
                                        onClick={() => addElement(sequence.value)}>{sequence.value.name}</div>

                                </div>

                            </div> :
                            (newElement === "StSq" ?
                                <div className="elementDetailsContainerInline">
                                    {stepSequence.map((s) => {
                                        return (
                                            <div className="elementDetail"
                                                onClick={() => addElement(s)}>{s.name}</div>

                                        )
                                    })}

                                </div> :
                                (newElement === "Spin" ?
                                    <div className="elementDetailsContainer">
                                        {spin.map((s) => {
                                            return (
                                                <div className="containerFlex">
                                                    {s.value.map((e) => {
                                                        return (
                                                            <div className="elementDetail"
                                                                onClick={() => addElement(e)}>{e.name}</div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div> :
                                    (newElement === "CoSpin" ?
                                        <div className="elementDetailsContainer">
                                            {comboSpin.map((s) => {
                                                return (
                                                    <div className="containerFlex">
                                                        {s.value.map((e) => {
                                                            return (
                                                                <div className="elementDetail"
                                                                    onClick={() => addElement(e)}>{e.name}</div>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div> :
                                        <div></div>)))))}

                </div> :
                <div></div>
            )}

            {(showRecapElement === true ?
                <div className="recapElementContainer">
                    <p className="elementRecap">
                        Element: {element.name}
                    </p>
                    <div className="goeButton" onClick={() => sendElement(2)}>2</div>
                    <div className="goeButton" onClick={() => sendElement(1)}>1</div>
                    <div className="goeButton" onClick={() => sendElement(0)}>0</div>
                    <div className="goeButton" onClick={() => sendElement(-1)}>-1</div>
                    <div className="goeButton" onClick={() => sendElement(-2)}>-2</div>
                </div>

                :
                <div></div>
            )}

            <div className="elementsCompleted">

                {(showCompleteElement === true ?
                    <div>
                        {elementArray.map((ele) => {

                            return (
                                (ele.name === "fall" ?
                                    <div className="rowTableFall">Fall</div> :
                                    <div className="rowTableElement">
                                        <div className="cellTableFirstElement">
                                            {ele.name}
                                        </div>
                                        <div className="cellTableElement">
                                            {ele.goe}
                                        </div>
                                        <div className="cellTableElement">
                                            {ele.value}
                                        </div>
                                    </div>)

                            )
                        })}{(send === true ?
                            <div className="containerComponent">
                                <div className="component" onClick={() => setComponent(true)}>Comp</div>
                                <div className="component" onClick={() => setComponent(true)}>Elem</div>

                            </div> :
                            <div></div>)}
                        {(component === true ?
                            <div className="containerComponent">
                                {arrayComponent.map((c) => {
                                    return (
                                        <div className="buttonComponent" onClick={() => {setComponentValue(c)}}>{c}</div>
                                    )
                                })}
                            </div> :
                            <div></div>)}
                        <div className="totalPoint">
                            Total: {total} <br></br>
                            Component: {componentPerformanceValue}
                        </div>
                    </div> :
                    <div></div>)
                }
            </div>




        </div>
    )
}

export default DataAtlete;