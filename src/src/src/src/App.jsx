import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const rooms = [
  1,2,3,4,5,6,
  7,8,9,10,11,12
];

function App() {

  const [login, setLogin] = useState(false);
  const [events, setEvents] = useState([]);

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const [reservation,setReservation] = useState({
    name:"",
    room:"",
    phone:"",
    price:"",
    note:""
  });


  if(!login){
    return(
      <div className="login">

        <h1>Ferdinand Residence</h1>
        <h2>Login</h2>

        <input 
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
        onClick={()=>{
          if(username==="ferdinand.residence" && password==="ferdinand12344"){
            setLogin(true);
          }else{
            alert("Login incorrect");
          }
        }}>
          Hyr
        </button>

      </div>
    )
  }


  function addReservation(){

    setEvents([
      ...events,
      {
        title:
        `Dhoma ${reservation.room} - ${reservation.name}`,
        date:new Date(),
      }
    ]);

    setReservation({
      name:"",
      room:"",
      phone:"",
      price:"",
      note:""
    });

  }


  return(

<div className="dashboard">

<h1>Ferdinand Residence Calendar</h1>


<div className="form">

<input
placeholder="Emri klientit"
value={reservation.name}
onChange={(e)=>setReservation({...reservation,name:e.target.value})}
/>

<select
value={reservation.room}
onChange={(e)=>setReservation({...reservation,room:e.target.value})}
>

<option>Zgjidh dhomën</option>

{rooms.map(r=>
<option key={r}>{r}</option>
)}

</select>


<input
placeholder="Telefon"
onChange={(e)=>setReservation({...reservation,phone:e.target.value})}
/>


<input
placeholder="Çmimi"
onChange={(e)=>setReservation({...reservation,price:e.target.value})}
/>


<button onClick={addReservation}>
Shto rezervim
</button>


</div>


<FullCalendar

plugins={[
dayGridPlugin,
interactionPlugin
]}

initialView="dayGridMonth"

events={events}

/>


</div>

  )
}

export default App;
