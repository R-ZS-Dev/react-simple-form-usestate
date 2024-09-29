import React, { useState } from 'react';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Handles the radio button selection
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  // Handles form submission and shows the alert
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedOption}`); // Shows alert with selected option
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="radio" 
          id="car" 
          name="vehicle" 
          value="Car" 
          checked={selectedOption === "Car"} 
          onChange={handleRadioChange}
        />
        <label htmlFor="car">Car</label>
      </div>

      <div>
        <input 
          type="radio" 
          id="bike" 
          name="vehicle" 
          value="Bike" 
          checked={selectedOption === "Bike"} 
          onChange={handleRadioChange}
        />
        <label htmlFor="bike">Bike</label>
      </div>

      <div>
        <input 
          type="radio" 
          id="cycle" 
          name="vehicle" 
          value="Cycle" 
          checked={selectedOption === "Cycle"} 
          onChange={handleRadioChange}
        />
        <label htmlFor="cycle">Cycle</label>
      </div>

      <input type="submit" value="Submit" />
      
      {/* Displays the selected option */}
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </form>
  );
}

export default App;





// import React, { useState } from 'react';

// const App = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [checkedValue, setCheckedValue] = useState('');

//   const handleCheckboxChange = (e) => {
//     const value = e.target.value;
//     const checked = e.target.checked;
    
//     setIsChecked(checked); // Updates whether the checkbox is checked or not
//     setCheckedValue(value); // Updates the checked value

//     if (checked) {
//       alert(`Checked Value: ${value}`); // Show alert when checkbox is checked
//     }
//   }

//   return (
//     <div>
//       <label>
//         <input 
//           type="checkbox" 
//           value="I agree to the terms and conditions" 
//           checked={isChecked} 
//           onChange={handleCheckboxChange} 
//         />
//         I agree to the terms and conditions
//       </label>
//     </div>
//   );
// }

// export default App;





// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [myCar, setMyCar] = useState('');
//   const handlesubmit = (e) => {
//     const selectedValue = e.target.value;
//     setMyCar(selectedValue);
//     alert(`Please enter ${selectedValue}`);
//   }
//   return (
//     <form>
//       <select value={myCar} onChange={handlesubmit}>
//         <option value={'Car'}>Car</option>
//         <option value={'Bike'}>Bike</option>
//         <option value={'Cycle'}>Cycle</option>
//       </select>
//     </form>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react';

// const App = () => {

//   const [textarea, setTextArea] = useState('');

//   const handleOnChange = (e) => {
//     setTextArea(e.target.value);
//   }
//   console.log(textarea, 'setTextArea');
  
//   const handleSubmit =(e) => {
//     e.preventDefault();
//     alert(`hiiiiii ${textarea}`)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea col='5' rows={'5'} value={textarea} onChange={handleOnChange}></textarea>
//       <input type='submit'></input>
//     </form>
//   )
// }

// export default App


// import React, { useState } from 'react';

// const App = () => {
//   const [newname, setNewname] = useState('');
//   const [age, setAge] = useState('');

//   const handleNameChange = (e) => {
//     setNewname(e.target.value);
//   };

//   const handleAgeChange = (e) => {
//     setAge(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${newname}, Age: ${age}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter Name</label>
//       <input
//         type="text"
//         name="entername"
//         value={newname}
//         onChange={handleNameChange}
//       />

//       <label>Enter Age</label>
//       <input
//         type="number"
//         name="age"
//         value={age}
//         onChange={handleAgeChange}
//       />

//       <input type="submit" />
//     </form>
//   );
// };

// export default App;




// import React, { useState } from 'react'

//   const App = () => {
//     const [newname, setNewame] = useState("");
    
//     const handleOnSubmit = (e) => {
//       e.preventDefault();
//       console.log('handleOnSubmit', newname);
      
//       alert(`Your Entered Value is: ${newname}`);
//     }
    
//     return (
//       <form onSubmit={handleOnSubmit}>
//         <label>Enter your name: </label>
//         <input type="text"
//         value={newname}
//         onChange={(e) => { console.log("words", e.target.value);
//          setNewame(e.target.value)}}
        
//          />
//       <input type="submit" />
//     </form>
//     )
//   }

// export default App