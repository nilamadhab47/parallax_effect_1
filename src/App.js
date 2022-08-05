import './App.css';
import { Parallax } from 'react-parallax';
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img6.jpg";
import sky from "./img/sky.jpg";
import afternoon from "./img/afternoon.jpg";
import evening1 from "./img/evening1.jpg";
import evening2 from "./img/evening2.jpg";
import night from "./img/night.jpg";
import {FaArrowDown} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parallax strength={600} bgImage={sky}>
          <div className="content">
          <h2> “Life is what happens to us while we are making other plans.” </h2>
            <h1>THE PARALLAX EFFECT</h1>
          </div>
        </Parallax>
        <Parallax strength={600} blur={{min: -3, max: 5}} bgImage={afternoon}>
          <div className="content">
          </div>
        </Parallax>
        <Parallax strength={400} blur={{min: -3, max: 5}} bgImage={evening1}>
          <div className="content">
          </div>
        </Parallax>
        <Parallax strength={300} blur={{min: -3, max: 5}} bgImage={evening2}>
          <div className="content">
          </div>
        </Parallax>
        <Parallax strength={-600} bgImage={night}>
          <div className="content">
            <h1 style={{color: 'white', fontSize: "3rem"}}>THE REVERSE PARALLAX EFFECT</h1>
            <h2></h2>
          </div>
        </Parallax>
      </header>
    </div>
  );
}

export default App;
