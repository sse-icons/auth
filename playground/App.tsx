import { Keycloak, PnpmLight } from "../dist/main";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          backgroundColor: "#FFFFFF",
          padding: "10px",
        }}
      >
        <Keycloak size={150} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          backgroundColor: "#0A0A0A",
          padding: "10px",
        }}
      >
        <PnpmLight size={150} />
        {/* <PnpmLightWordmark size={150} /> */}
      </div>
      <div className="card">
        <a href="https://github.com/sse-auth/icons">
          <button>github.com/sse-auth/icons</button>
        </a>
        <p>
          Edit <code>playground/App.tsx</code> and save to see changes
        </p>
      </div>
      <p className="read-the-docs">
        Test around with <i>sse-icons</i> components here while developing
        them
      </p>
    </>
  );
}

export default App;
