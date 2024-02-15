import React, { useState } from 'react'
export default function TextForm(props) {




  const handelUpClick = () => {
    console.log("upper case wasd ckick");
    let newText = text.toUpperCase();
    setText(newText)
  }

  const convertToLowercase = () => {
    setText(text.toLowerCase());
  };


  const formatText = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const copyToClipboard = () => {
    // alert("Your file is being uploaded!")
    navigator.clipboard.writeText(text);
  };
  const clearText = () => {
    setText('');
  };


  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const countTextLength = () => {
    return text.length;

  };


  const wordCount = () => {
    return text.split(/\s+/).filter(word => word !== '').length;

  };

  const sentenceCount = () => {
    return text.split(/[.!?]+/).filter(sentence => sentence !== '').length;

  };

  const digitCount = () => {
    return text.replace(/\D/g, '').length;
  };
  const vowelCount = () => {
    return text.match(/[aeiou]/gi)?.length || 0;
  };
  const consonantCount = () => {
    return text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
  };







  const changed = (event) => {
    // console.alert("upper case wasd ckick");
    setText(event.target.value);
  }
  const [text, setText] = useState('enter text hare');


  return (
    <div className="bt" >
      <h1>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} onChange={changed} id="myBox" rows="8" ></textarea>
      </div>

      <div className="buttonset">

        <button type="submit" className="btn btn-primary" onClick={handleInputChange}>Anylys</button>

        <button type="submit" className="btn btn-primary" onClick={handelUpClick}>upper case</button>
        <button type="submit" className="btn btn-primary" onClick={convertToLowercase}>lower case</button>
        <button type="submit" className="btn btn-primary" onClick={formatText}>formet text</button>
        <button type="submit" className="btn btn-primary" onClick={copyToClipboard}>Copy text</button>
        <button type="submit" className="btn btn-primary" onClick={clearText}>Clear text</button>

      </div>

   

      <div className="container">
        <div className="box">
          <p>{countTextLength()}
          <br />
          CHARACTER</p>
        </div>
        <div className="box">  <p>{wordCount()}  <br />
       WORD </p></div>
        <div className="box"> <p>  {sentenceCount()} <br/> sentence</p></div>
        <div className="box"> <p>  {digitCount()}<br/>  digit</p></div>
        <div className="box">
          <p> {vowelCount()}<br/>  vowel</p></div>
        <div className="box">    <p>{consonantCount()} <br/>   consonant</p></div>

      </div>
    </div>
  )

}


