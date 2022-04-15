import React from 'react';
import './App.css';

function Main(){
  return(
    <section>
      <p>We serve the most delicious food around</p>
    </section>
  );
    
}
function Header(props){
  console.log(props)
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
function App() {
  return (
    <div className="App">
      <Header name="Cookoo"/>
      <Main/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
