import { useState } from "react";

function App() {
  const [largura, setLargura] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [fundo, setFundo] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sistema de Precificação Synpack</h1>

      <h2>Cálculo de Sacola de Papel</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Largura (cm): </label>
        <input
          type="number"
          value={largura}
          onChange={(e) => setLargura(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Comprimento (cm): </label>
        <input
          type="number"
          value={comprimento}
          onChange={(e) => setComprimento(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Fundo (cm): </label>
        <input
          type="number"
          value={fundo}
          onChange={(e) => setFundo(e.target.value)}
        />
      </div>

      <button
        onClick={() =>
          alert(
            `Dimensões: ${largura} x ${comprimento} x ${fundo}`
          )
        }
      >
        Calcular
      </button>
    </div>
  );
}

export default App;
