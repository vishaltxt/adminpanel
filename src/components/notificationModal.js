import './notificationModal.css'
import cross from './images/Multiply.png'

const NotificationModal = ({ closenotification }) => {
    return (
        <div className='notification-container'>
            <div className='notification-second-container'>
                <p className='notification'>Notification <img className='notiimg' onClick={closenotification} src={cross} alt=''></img></p>
                <div className='not-flex'>
                    <p>All</p>
                    <p>Hiring</p>
                    <p>Applied Jobs</p>
                    <p>Feedback and Support</p>
                </div>
                <div className='hr'></div>
                <div className='flexx'>
                    <p className='flexx-p'>New job posted by XYZ Corp.</p>
                    <p className='flexx-date'>03/01/2024</p>
                </div>
                <div className='hr-2'></div>
            </div>
        </div>
    )
}

export default NotificationModal;
