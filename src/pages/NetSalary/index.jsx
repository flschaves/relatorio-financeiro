import React from 'react';
import IntlCurrencyInput from "react-intl-currency-input";

import currencyConfig from '../../configs/currency';
import { Container, FormContainer, ResultContainer, Table } from './styles';

const NetSalary = () => {
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();

    console.log(value); // value without mask (ex: 1234.56)
    console.log(maskedValue); // masked value (ex: R$1234,56)
  };

  return (
    <Container>
      <FormContainer>
        <form>
          <div>
            <label htmlFor="salary">Salário Líquido</label>
            <IntlCurrencyInput
              name="salary"
              currency="BRL"
              config={currencyConfig}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="another_discounts">Outros descontos</label>
            <IntlCurrencyInput
              name="another_discounts"
              currency="BRL"
              config={currencyConfig}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="dependants">Dependentes</label>
            <input type="number" name="dependants" placeholder="0" />
          </div>
          <button type="submit">Calcular</button>
        </form>
      </FormContainer>
      <ResultContainer>
        <Table>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Ref.</th>
              <th>Proventos</th>
              <th>Descontos</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tr-info">
              <td>Salário bruto</td>
              <td>-</td>
              <td id="sl-gross-salary-value">R$ 2.000,00</td>
              <td>-</td>
            </tr>
            <tr class="tr-info">
              <td>Outros</td>
              <td>-</td>
              <td>-</td>
              <td id="sl-others-value">R$ 0,00</td>
            </tr>
            <tr class="tr-info">
              <td>INSS</td>
              <td id="sl-inss-percent">9.00%</td>
              <td>-</td>
              <td id="sl-inss-value">R$ 180,00</td>
            </tr>
            <tr class="tr-info">
              <td>IRRF</td>
              <td id="sl-irrf-percent">0.00%</td>
              <td>-</td>
              <td id="sl-irrf-value">R$ 0,00</td>
            </tr>
            <tr class="tr-total">
              <td class="sl-tr-total-label" colspan="2">Totais</td>
              <td id="total-value-gross-salary">R$ 2.000,00</td>
              <td id="total-discounts-gross-salary">R$ 180,00</td>
            </tr>
            <tr class="tr-footer">
              <td colspan="2">Valor salário líquido</td>
              <td id="total-gross-salary-liquid" colspan="2">R$ 1.820,00</td>
            </tr>
          </tbody>
        </Table>
      </ResultContainer>
    </Container>
  );
}

export default NetSalary;