import qrCode from "./image-qr-code.png";
import "./App.css";

function App() {
  return (
    <body>
      <div class="container">
        <div class="img-container">
          <img src={qrCode} className="App-logo" alt="qr code" />
        </div>
        <div class="info-container">
          <h3>Improve your front-end skills by building projects</h3>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mondli</a>.
      </div>
    </body>
  );
}

export default App;
