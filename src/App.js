import React from 'react';
import './App.css';
import restaurant from './restaurant.jpg'

function Main(props){
  console.log(props);
  return(
    <section>
      <p>We serve the most delicious food around</p>
      <img src={restaurant} height={200} alt="Napkin and silverware"/>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish)=>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
    
}
function Header(props){
  
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
const dishes=[
  "Veg Biryani",
  "Sambar, Rice, Papad",
  "Spichie Paneer"];
  const dishObject= dishes.map( (dish, i)=>({ id: i, title: dish }) );
function App() {
  return (
    <div className="App">
      <Header name="Cookoo"/>
      <Main dishes={dishObject}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
