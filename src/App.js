// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

// the below is the npm pkg install externally from react-touter-dom quick start
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //modes for application dark or light
  const toggleMode =() =>{           //arrow head function
    if (mode === 'light'){
        setMode("dark");
        document.body.style.backgroundColor = '#282828'
        document.body.style.color= 'white'
        document.title='TextUtile - Dark Mode'
        showAlert("Mode Selected is the dark mode","success");
    }
    else{
        setMode("light");
        document.body.style.backgroundColor = '#FFFAFA'
        document.body.style.color= 'black'
        document.title='TextUtile - Light Mode'
        showAlert("Mode Selected is the light mode","success");

    }
  }

  const [alert, setAlert] = useState(null); //alert object
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type : type
      });
      
      //i want this alert to go by itself within 2 sec so will add setTimeOut
      setTimeout(() => {
        setAlert(null);
      }, 1500);

  } //method to show the alert

  return (
    <>

    {/* <Navbar title="MRunali" about="About Us" contact="Contact us"/> */}

    {/* <Router> */}

    <Navbar  title="Mrunali" contact="Contact us" mode={mode} toggleMode ={toggleMode} />
  
    <Alert alert = {alert} /> {/* the {alert} is coming from the above line where i gave "alert object" in comment  */}

    {/* brought from the react router dom site */}
    

    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze"/>

    {/* <Switch>

          <Route path="/about">
            <About />
          </Route>
    
          <Route path="/">
             <TextForm showAlert={showAlert} heading="Enter the text to analyze"/>
          </Route>

    </Switch> */}

    </div>

    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze"/> */}
    {/* <About />  */}

    {/* </Router> */}
   </>
  
  );
}

export default App;
