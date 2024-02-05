import React, { useState } from 'react'
import './manage.css'
import bell from './images/notifications_active.png'
import manager from './images/bookmark_manager.png'
import assignment from './images/assignment.png'
import component from './images/Component 33.png'
import check from './images/check.png'
import UpdateModal from './updateModel'
import { Link } from 'react-router-dom'

const Manage = () => {

    const [update, setUpdate] = useState(false);
    const closeupdate = () => setUpdate(false);
    return (
        <div>
            <div className='header'>
                <div className='header-p'>
                    <p>Hiring</p>
                </div>
                <div className='header-2'>
                    <img className='bell' src={bell} alt=""></img>
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
            <div className='manage-header-mid'>
                <div className='manage-work-flex'>
                    <img className='manage-same' src={manager} alt=''></img>
                    <p className='manage-same-p switch'>Manage</p>
                </div>
                <div className='manage-work-flex'>
                    <img className='manage-same' src={assignment} alt=''></img>
                    <p className='manage-same-p'><Link to="/requireddetail">Company Requirement Detail</Link></p>
                </div>
            </div>
            <div>
                <div id='accepted-bg'>
                    <div className="manage-container">
                        <div className='manage-header-lower bg-1'>
                            <div className='manage-work-flex'>
                                <p className='manage-dev'>Requirement Review By Zestire</p>
                            </div>
                            <div className='date-flex'>
                                <p className='manage-experience'>Date</p>
                                <select className='manage-date bg-1'>
                                    <option>1/01/2024</option>
                                </select>
                            </div>
                            <div>
                                <button className='manage-bttn-1'>Undo</button>
                                <img className='component' src={component} alt=''></img>
                                <img className='check' src={check} alt=''></img>
                            </div>
                        </div>
                        <div className='manage-header-lower bg-2'>
                            <div className='manage-work-flex'>
                                <p className='manage-dev'>Hiring Process  & Interview Started</p>
                            </div>
                            <div className='date-flex'>
                                <p className='manage-experience'>Select Date</p>
                                <select className='manage-date bg-2'>
                                    <option>1/01/2024</option>
                                </select>
                            </div>
                            <div>
                                <button className='manage-bttn' onClick={() => setUpdate(true)}>Update</button>
                            </div>
                        </div>
                        <div className='manage-header-lower bg-2'>
                            <div className='manage-work-flex'>
                                <p className='manage-dev'>Interview Process Completed</p>
                            </div>
                            <div className='date-flex'>
                                <p className='manage-experience'>Select Date</p>
                                <select className='manage-date bg-2'>
                                    <option>1/01/2024</option>
                                </select>
                            </div>
                            <div>
                                <button className='manage-bttn' onClick={() => setUpdate(true)}>Update</button>
                            </div>
                        </div>
                        <div className='manage-header-lower bg-2'>
                            <div className='manage-work-flex'>
                                <p className='manage-dev'>Candidate Shortlisted</p>
                            </div>
                            <div className='date-flex'>
                                <p className='manage-experience'>Select Date</p>
                                <select className='manage-date bg-2'>
                                    <option>1/01/2024</option>
                                </select>
                            </div>
                            <div>
                                <button className='manage-bttn' onClick={() => setUpdate(true)}>Update</button>
                            </div>
                        </div>
                        <div className='manage-header-lower bg-1 top'>
                            <p className='manage-dev md'>If the requirement of company is completed ,pls click on update!</p>
                            <button className='manage-btnn' onClick={() => setUpdate(true)}>Update</button>
                            {update && <UpdateModal closeupdate={closeupdate} />}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Manage;
