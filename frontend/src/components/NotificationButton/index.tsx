import './styles.css'
import notificationButton from '../../assets/img/notification-icon.svg'
import axios from 'axios';
import { BASE_URL } from '../../services/request';
import { toast } from 'react-toastify';

interface NotificationButtonProps{
  saleId: number;
}

export function NotificationButton({ saleId }:NotificationButtonProps){
  function handleSendNotification(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
      toast.info("SMS enviado com sucesso!")
    })
  }

  return(
      <div className='dsmeta-red-btn' onClick={()=> handleSendNotification(saleId)}>
        <img src={notificationButton} alt="Notificar" />
      </div>
  )
}