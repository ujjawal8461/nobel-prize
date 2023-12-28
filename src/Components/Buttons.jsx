import React from 'react';
import './Buttons.css';

function range(start, end) {
    return Array.apply(0, Array(end - 1))
      .map((element, index) => index + start);
  }

function Buttons(props) {
  return (
  <div>
    
    <select className="custom-dropdown" onChange = { (e) => props.changeCategory(e.target.value) }>
        {
            ['All Categories', 'Physics', 'Chemistry', 'Medicine', 'Literature', 'Peace', 'Economics Sciences'].map((category) => <option value = { category }>{ category }</option>)
        }
    </select>


    <select className="custom-dropdown" onChange = { (e) => props.changeYear(e.target.value) }>
        <option value = 'All'>All Year</option>
        {
            range(1900, 2023).map((num) => <option value = { num }>{ num }</option>)
        }
    </select>


  </div>
  );
};

export default Buttons;