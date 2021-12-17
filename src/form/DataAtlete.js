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
    const [showWizardElement, setShowWizardElement] = useState(false);
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

    let jump = Jump
    let sequence = Sequence
    let stepSequence = StepSequence
    let spin = Spin
    let comboSpin = ComboSpin

    const addElement = (e) => {
        setNewElement(false)
        setElement(e)
        setShowWizardElement(false);
        setShowRecapElement(true);
    }

    const cahngeGOE = (e) => {
        setGoe(e.target.value);
        setSend(true);
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

    const sendElement = (e) => {
        console.log(e)

        if (e.name === "Fall") {
            let completeElement = {
                "name": e.name,
                "execution": e.value,
                "goe": goe,
            }
            setElementArray([...elementArray, completeElement])
            setShowWizardElement(false);
            setShowRecapElement(false);
            setShowCompleteElement(true);
            setGoe(0);
            setSend(false)
        } else {
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
                    case "0":
                        completeElement = {
                            "name": element.name,
                            "value": element.value,
                            "goe": goe
                        }
                        setTotal(total + element.value)
                        break
                    case "-1":
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoeN1,
                            "goe": goe
                        }
                        setTotal(total + element.valueGoeN1)
                        break
                    case "-2":
                        completeElement = {
                            "name": element.name,
                            "value": element.valueGoeN2,
                            "goe": goe
                        }
                        setTotal(total + element.valueGoeN2)
                        break
                }


                setElementArray([...elementArray, completeElement])
                setShowWizardElement(false);
                setShowRecapElement(false);
                setShowCompleteElement(true);
                setGoe(0);
                setSend(false)
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
        sendElement({
            "name": "Fall",
            "value": "2",
            "goe": "0"
        })
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
            <div className="buttonFall"
                onClick={() => { addFall() }}>FALL</div>
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
                            <option value="Spin">Spin</option>
                            <option value="CoSpin">CoSpin</option>
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
                        (newElement === "ChSq" ?
                            <div className="elementDetailsContainer">
                                <div className="containerFlex">
                                    <div className="elementDetail"
                                        onClick={() => addElement(sequence.value)}>{sequence.value.name}</div>

                                </div>

                            </div> :
                            (newElement === "StSq" ?
                                <div className="elementDetailsContainer">
                                    {stepSequence.map((s) => {
                                        return (
                                            <div className="containerFlex">
                                                <div className="elementDetail"
                                                    onClick={() => addElement(s)}>{s.name}</div>
                                            </div>
                                        )
                                    })}

                                </div> :
                                (newElement === "Spin" ?
                                <div className="elementDetailsContainer">
                                    {spin.map((s) => {
                                        return (
                                            <div className="containerFlex">
                                                <div>
                                                    {s.value.map((e) => {
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
                                (newElement === "CoSpin" ?
                                <div className="elementDetailsContainer">
                                    {spin.map((s) => {
                                        return (
                                            <div className="containerFlex">
                                                <div>
                                                    {s.value.map((e) => {
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
                                 <div></div>)))))}

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
                        <select onChange={e => cahngeGOE(e)}>
                            <option default value="3">Select an option</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="0">0</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                        </select>

                    </div>

                    {(send === true ? <div
                        onClick={() => sendElement({})} className="buttonSendElement">Send</div> : <div></div>)}


                </div> :
                <div></div>
            )}

            <div className="elementsCompleted">

                {(showCompleteElement === true ?
                    <div>
                        {elementArray.map((ele) => {

                            return (
                                (ele.name === "Fall" ?
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