import './User.css'

function User(props) {
  return(
    <div className="user-date">
      <div className="user-date_name-age">{props.name} ({props.age} years old)</div>
    </div>)
}

export default User