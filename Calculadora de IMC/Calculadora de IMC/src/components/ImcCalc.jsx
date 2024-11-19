import Button from './Button';
import './imcCalc.css';

const imcCalc = () => {
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
      <div className="form-inputs">
        <div className="form-control">
          <label htmlFor="height">Altura:</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Exemplo 1,75"
          />
        </div>
        <div className="form-control">
          <label htmlFor="weight">Peso:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Exemplo 70,5"
          />
        </div>
      </div>
      <div className="action-control">
        <Button id="calc-btn" text="Calcular"/>
        <Button id="clear-btn" text="Limpar"/>
      </div>
    </form>
  </div>
}

export default imcCalc