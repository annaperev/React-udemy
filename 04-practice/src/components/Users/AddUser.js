import Card from '../UI/Card';
import {useState} from 'react'
import './AddUser.css'


const AddUser = (props) => {

  const[enteredName, setEnteredName] = useState('');
  const[enteredAge, setEnteredAge] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const user ={
      name: enteredName,
      age: enteredAge
    };

    props.onSaveUser(user);
    setEnteredName('');
    setEnteredAge('');
  }


  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label className="add-user-label" htmlFor="username">Username</label>
          <input 
            className="add-user-input" 
            id="username" 
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label className="add-user-label" htmlFor="username">Age (Years)</label>
          <input 
            className="add-user-input" 
            id="age" 
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
