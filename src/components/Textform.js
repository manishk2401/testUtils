import React, { useState } from 'react'

export default function Textform() {
    function toTitles(s) { return s.replace(/\w\S*/g, function (t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); }); }

    let handleChangeText = (e) => {
        settext(e.target.value)
    }

    let handleUpChange = () => {
        let newText = text.toUpperCase()
        console.log(newText);
        settext(newText)
    }

    let handleProChange = () => {
        let newText = toTitles(text)
        console.log(newText);
        settext(newText)
    }

    let handleLowChange = () => {
        let newText = text.toLowerCase()
        settext(newText)
    }

    const [text, settext] = useState('Text Here')
    return (
        <>
            <div className='container p-2' style={{ backgroundColor: '#ebebeb' }}>
                <textarea id="mybox" value={text} className='form-control' onChange={handleChangeText} rows="3"></textarea>
                <button className='btn btn-primary m-1' onClick={handleUpChange}>Convert to UPPERCASE</button>
                <button className='btn btn-info m-1' onClick={handleLowChange}>Convert to lowercase</button>
                <button className='btn btn-success m-1' onClick={handleProChange}>Convert to Capitalize</button>
            </div>
            <div className="container">
                <p>Total Characters : {text.replace(/ /g, "").length}, Total Works : {text.split(" ").filter((x) => x !== "").length}</p>
            </div>
        </>
    )
}
