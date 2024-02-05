import React, { useState } from 'react'
import './adminpanel.css'
import bell from './images/notifications_active.png'
import work2 from './images/work (2).png'
import accept from './images/article.png'
import library from './images/library_add_check.png'
import profile from './images/Businessman.png'
import MyModal from './acceptmodal'
import Reject from './rejectmodal'
import { Link } from 'react-router-dom'
import ViewModal from './viewmodal'
import NotificationModal from './notificationModal'

const Adminpanel = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);

    const [reject, setRejectmodal] = useState(false);
    const closeRejectmodal = () => setRejectmodal(false);

    const [view, setViewmodal] = useState(false);
    const closeViewmodal = () => setViewmodal(false);

    const [notification, setNotificationmodal] = useState(false);
    const closenotification = () => setNotificationmodal(false);

    // const [adminType, setAdminType] = useState('Item');
    // const handleAdminChange = (type) => {
    // setAdminType(type);
    // };
    return (
        <div>
            <div className='header'>
                <div className='header-p'>
                    <p>Hiring</p>
                </div>
                <div className='header-2'>
                    <img className='bell' onClick={() => setNotificationmodal(true)} src={bell} alt=""></img>
                    {notification && <NotificationModal closenotification={closenotification} />}
                    <p>Sort</p>
                    <select className='select'>
                        <option value="">Today</option>
                        <option value="">Yesterday</option>
                        <option value="">Last Week</option>
                        <option value="">Last Month</option>
                    </select>
                </div>
            </div>
            <div className='hr'></div>
            <div className='header-mid'>
                <div className='work-flex'>
                    <img className='same switch' src={work2} alt=''></img>
                    <p className='same-p switch'>Job Requirements</p>
                </div>
                <div className='work-flex'>
                    <img className='same' src={accept} alt=''></img>
                    <p className='same-p'><Link to="accepted">Accepted</Link></p>
                </div>
                <div className='work-flex'>
                    <img className='same' src={library} alt=''></img>
                    <p className='same-p'><Link to="/completed">Completed Requirement</Link></p>
                </div>
            </div>
            <div className='header-lower'>
                <div className='work-flex'>
                    <img className='profile' src={profile} alt=""></img>
                    <p className='dev'>React Developer</p>
                </div>
                <div className='react-exp'>
                    <p className='experience'>Experience req</p>
                    <p className='intern'>Intern</p>
                </div>
                <div>
                    <p className='experience'>Date of joining</p>
                    <p className='intern'>25/01/2024</p>
                </div>
                <div className='buttons'>
                    <button className='accept' onClick={() => setShowModal(true)}>Accept</button>
                    {showModal && <MyModal closeModal={closeModal} />}
                    <button className='reject' onClick={() => setRejectmodal(true)}>Reject</button>
                    {reject && <Reject closeRejectmodal={closeRejectmodal} />}
                </div>
                <div>
                    <p className='view' onClick={() => setViewmodal(true)}>View</p>
                    {view && <ViewModal closeViewmodal={closeViewmodal} />}
                </div>
            </div>
            <div className='header-lower'>
                <div className='work-flex'>
                    <img className='profile' src={profile} alt=""></img>
                    <p className='cto'>Chief Technical Officer(CTO)</p>
                </div>
                <div className='exp-div'>
                    <p className='experience'>Experience req</p>
                    <p className='intern'>Intern</p>
                </div>
                <div>
                    <p className='experience'>Date of joining</p>
                    <p className='intern'>25/01/2024</p>
                </div>
                <div className='buttons'>
                    <button className='accept' onClick={() => setShowModal(true)}>Accept</button>
                    <button className='reject' onClick={() => setRejectmodal(true)}>Reject</button>
                </div>
                <div>
                    <p className='view' onClick={() => setViewmodal(true)}>View</p>
                </div>
            </div>
            <div className='header-lower'>
                <div className='work-flex'>
                    <img className='profile' src={profile} alt=""></img>
                    <p className='cto'>Chief Technical Officer(CTO)</p>
                </div>
                <div className='exp-div'>
                    <p className='experience'>Experience req</p>
                    <p className='intern'>Intern</p>
                </div>
                <div>
                    <p className='experience'>Date of joining</p>
                    <p className='intern'>25/01/2024</p>
                </div>
                <div className='buttons'>
                    <button className='accept' onClick={() => setShowModal(true)}>Accept</button>
                    <button className='reject' onClick={() => setRejectmodal(true)}>Reject</button>
                </div>
                <div>
                    <p className='view' onClick={() => setViewmodal(true)}>View</p>
                </div>
            </div>
            <div className='header-lower'>
                <div className='work-flex'>
                    <img className='profile' src={profile} alt=""></img>
                    <p className='cto'>Chief Technical Officer(CTO)</p>
                </div>
                <div className='exp-div'>
                    <p className='experience'>Experience req</p>
                    <p className='intern'>Intern</p>
                </div>
                <div>
                    <p className='experience'>Date of joining</p>
                    <p className='intern'>25/01/2024</p>
                </div>
                <div className='buttons'>
                    <button className='accept' onClick={() => setShowModal(true)}>Accept</button>
                    <button className='reject' onClick={() => setRejectmodal(true)}>Reject</button>
                </div>
                <div>
                    <p className='view' onClick={() => setViewmodal(true)}>View</p>
                </div>
            </div>
        </div>
    )
}

export default Adminpanel;
