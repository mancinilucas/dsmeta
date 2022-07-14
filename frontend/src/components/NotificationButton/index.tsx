import './styles.css'
import notificationButton from '../../assets/img/notification-icon.svg'

export function NotificationButton(){
  return(
      <div className='dsmeta-red-btn'>
        <img src={notificationButton} alt="Notificar" />
      </div>
  )
}