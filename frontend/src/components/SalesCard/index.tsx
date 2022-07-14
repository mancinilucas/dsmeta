import { useState } from 'react';
import { NotificationButton } from '../NotificationButton'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './styles.css'

export function SalesCard(){

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date()

  const [minDate, setMinDate] = useState(new Date(min))
  const [maxDate, setMaxDate] = useState(new Date(max))


  return(
    <>
      <div className="dsmeta-card">
        <h2>Vendas</h2>
        <div>
          <div className="form-control-container">
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className="dsmeta-sales-table">
            <thead>
              <tr>
                <th className="show-992">ID</th>
                <th className="show-576">Data</th>
                <th>Vendedor</th>
                <th className="show-992">Visitas</th>
                <th className="show-992">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="show-992">#341</td>
                <td className="show-576">12/07/2022</td>
                <td>The Dog</td>
                <td className="show-992">15</td>
                <td className="show-992">11</td>
                <td>R$ 70000.00</td>
                <td>
                  <div className="dsmeta-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show-992">#341</td>
                <td className="show-576">12/07/2022</td>
                <td>The Dog</td>
                <td className="show-992">15</td>
                <td className="show-992">11</td>
                <td>R$ 70000.00</td>
                <td>
                  <div className="dsmeta-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="show-992">#341</td>
                <td className="show-576">12/07/2022</td>
                <td>The Dog</td>
                <td className="show-992">15</td>
                <td className="show-992">11</td>
                <td>R$ 70000.00</td>
                <td>
                  <div className="dsmeta-btn-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}