import addComma from "../../utils/addComma";
import './Table.css';

const Table = ({ value, percentage, days }) => {
  let total = value;
  const tableRows = [];
  const daysFor = days;
  for (let i = 0; i < daysFor; i++) {
    const newTotal = total + total * (percentage / 100);
    let invest = total - percentage * (percentage / 20000);
    let payDay = total - percentage * (percentage / 20000);
    let payFixed = payDay.toFixed(1).replace('.', '');
    const formattedNumber = addComma(payFixed);
    tableRows.push(
      <tr key={i}>
        <td>Dia {i + 1}</td>
        <td>R$ {invest.toFixed(2)}</td>
        <td>{percentage}%</td>
        <td>R$ {formattedNumber}</td>
        <td>R$ {newTotal.toFixed(2)}</td>
      </tr>
    );
    total = newTotal;
  }
  return (
    <div className="globalTable">
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Dias</th>
            <th>Investimento</th>
            <th>Retorno do dia %</th>
            <th>Meta do dia</th>
            <th>Valor Acumulado</th>
          </tr>
        </thead>
        <tbody className="tbody">{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
