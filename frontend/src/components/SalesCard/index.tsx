import { NotificationButton } from '../NotificationButton'
import './styles.css'

export function SalesCard(){
  return(
    <>
      <div className="dsmeta-card">
        <h2>Vendas</h2>
        <div>
          <div className="form-control-container">
            <input className="form-control" type="text" />
          </div>
          <div className="form-control-container">
            <input className="form-control" type="text" />
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