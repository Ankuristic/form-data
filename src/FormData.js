import React, {useState} from 'react';
// import Dropdown from 'react-dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';



 function FormData() {
    const[food,setFood]=useState('');
    console.log("food",food);
    const[drink,setDrink]=useState('water');

    const handleFoodChange =(event)=>{

        setFood(event.target.value);
    }

    const handleDrinkChange =(event)=>{
        setDrink(event.target.value)
    }

   


  return (
    <div>
        {/* <Dropdown label ="what do we eat"
        options={[
            {label:'fruit',value:'fruit'},
            {label:'Vegetable',value:'vegetables'},
        ]}

        value={food}
        onChange={handleFoodChange}/> */}

      {/* <Dropdown  placeholder='SELECT'label ="what do we drink"
        options={[
            {label:'water',value:'water'},
            {label:'maza',value:'maza'}
        ]}
        value={drink} onChange={handleDrinkChange}
        /> */}

<DropdownButton  alignRight title="Dropdown"
      id="dropdown-menu-align-right"
      onSelect={handleFoodChange}
>
      <Dropdown.Item eventKey="option-1">fruits</Dropdown.Item>
      <Dropdown.Item eventKey="option-2">vegetables</Dropdown.Item>

    </DropdownButton>

    <h4>You selected {food}</h4>
    <Button variant="success">Submit</Button>{' '}


    </div>
   
  )
}


export default FormData