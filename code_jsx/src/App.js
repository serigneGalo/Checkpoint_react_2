import './App.css';
import myImage from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
        <h1 className="title red">Galo DIOKHANE</h1>
        <br/>
        <img src={myImage} />
        <br/>
        <img src="imageInPublic.jpg" />
      </div>
        <video width="320" height="240" controls>
        <source src="VID-20161104-WA0004.mp4" type="video/mp4"/>
        </video>
    </div>
  );
}

export default App;
