import React ,{useState} from 'react'

export default function TextForm(props) {

  // arrow function 
  const handelUpClick = () =>{
    console.log("Upper case was clicked" + text);
    // setText("You have clicked on handelUpClick"); //change the state

    //to make uppercaser thing worked
    let newText = text.toUpperCase();
   
    setText(newText)

    props.showAlert("Upper case has been enable","info");

  }

  const handelLoClick =() =>{
    console.log("lower case was clicked" + text);
  
    //to make lowercase thing worked
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Lower case has been enable","info");

  }

  const handelClearClick =() =>{
    console.log("lower case was clicked" + text);
  
    //to make lowercase thing worked
    let newText = ""
    setText(newText);
    props.showAlert("Text has been Clear","warning");

  }

  // const handelSpeakClick = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // }

  const handelSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }

    props.showAlert("Speak click has been enable","info");

 }

  // Credits: A 
  //To copy the text
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  }

  const handelOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);  //can enter new value
  }


  // hook  --> can use this as a placeholder
  const [text,setText] = useState("");


  return (
    <>
  <div className="container">
    <h1>{props.heading} </h1>
    <div className="my-3">
    
    <textarea className="form-control" value= {text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
  </div>

    <button className="btn btn-secondary" onClick={handelUpClick}>Covert the text in uppercase</button>
    <button className="btn btn-secondary m-2" onClick={handelLoClick}>Covert the text in lowercase</button>
    {/* <button className="btn btn-secondary m-2" onClick={handelSpeakClick}>Speak</button> */}
    <button onClick={handleCopy} className="btn btn-secondary m-2">Copy</button>
    <button onClick={handelSpeakClick} className="btn btn-secondary " id="toggle">Speak</button>
    <button className="btn btn-success m-2" onClick={handelClearClick}>Clear</button>

  </div>

  <div className="container my-3">
    <h2>Your Text Summary</h2>
    {/* <p>{text.split(" ").length} words, {text.length} character</p> */}
    <p>{text.trim() === '' ? '0 words' : `${text.split(/\s+/).filter(Boolean).length} words`}, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>   {/* the 0.008 is taken from internet */}
    
    <h3>Preview</h3>
    <div className="container">
    {/* <p>{text}</p> */}
    <p>{text.length>0?text:"Enter something in the text box about to preview"}</p> 
    </div>
  </div>
 
  </>
  )
}
