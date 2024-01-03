import React from 'react'

function Alert(props) {

  // now as the type in bootstrap is in small letter but while showing we need the starting letter of type in captial so will make arrow fuction(?) here to capitalize
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // this means word cha pahila letter will be capitalize while remaining other will be in slice in lower case

  }


  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">

      <strong>{capitalize (props.alert.type)}</strong> {props.alert.msg} 
      {/*this all props are coming frim that showAlert function in App.js*/}
      {/*here this might give error cuz our props.alert is set to null and so null.type will throw error so so so to handel that will add props.alert && in the begining*/}

      
    </div>
  )
}

export default Alert
