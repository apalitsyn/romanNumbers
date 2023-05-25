import React, { useRef } from 'react';
import axios from 'axios';

  
export default function ConvertNumberForm({setconvertionResult}) {
  const inputRef = useRef();  

  const convertNumber = (e) => {
      const romanNumber = fetchDataAndSet(inputRef.current.value);
  };

  const fetchDataAndSet = async (num) => {
    const result = await axios.get(`http://localhost:8080/?ourNumber=${num}`);
    setconvertionResult(result.data);
  };

  return (
    <form data-testid="ConvertNumberForm">
      <div className="mb-3 col-10">
        <label htmlFor="ourNumber" className="form-label">Please enter your number</label>
        <input type="number" className="form-control" id="ourNumber" aria-describedby="ourNumberHelp" ref={inputRef} />
        <div id="ourNumberHelp" className="form-text">Number has to be between 0 and 3999</div>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          convertNumber();
        }}>
          Convert
        </button>
    </form>
  )
}
