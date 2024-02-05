import React from 'react'
import './requireddetail.css'
import bell from './images/notifications_active.png'
import managerM from './images/bookmark_manager (1).png'
import assignment1 from './images/assignment (1).png'
import profile from './images/Businessman.png'
import { Link } from 'react-router-dom'

const Requireddetail = () => {
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
                    <img className='manage-same' src={managerM} alt=''></img>
                    <p className='manage-same-p'><Link to="/manage">Manage</Link></p>
                </div>
                <div className='manage-work-flex'>
                    <img className='manage-same' src={assignment1} alt=''></img>
                    <p className='manage-same-p switch'>View Requirement Detail</p>
                </div>
            </div>
            <div className='req-view-mid'>
                <div className='view-profile'>
                    <img className='view-img' src={profile} alt=""></img>
                    <p className='cto'>React Developer</p>
                </div>
                <div>
                    <p className='view-experience'>Experience req</p>
                    <p className='view-intern'>Intern</p>
                </div>
                <div>
                    <p className='view-experience'>Date of joining</p>
                    <p className='view-intern'>25/01.2024</p>
                </div>
                <div>
                    <p className='view-experience'>No. of Position</p>
                    <p className='view-intern'>1</p>
                </div>
            </div>
            <div className='hr'></div>
            <div className='req-view-end'>
                <div>
                    <p className='view-budget'>Budget</p>
                    <p className='view-200'>$200</p>
                </div>
                <div>
                    <p className='descript'>Description</p>
                    <ol>
                        <li>Position:Chief Technology Officer (CTO)</li>
                        <p>- Lead our tech innovation and development.</p>
                        <li>Responsibilities:</li>
                        <p>  - Shape and implement the company's tech roadmap.</p>
                        <p> - Drive product development and ensure high-quality standards.</p>
                        <p>- Manage the tech team, fostering a culture of collaboration and innovation</p>
                        <li>Qualifications:</li>
                        <p>- Proven CTO or executive leadership experience.</p>
                        <p>- Strong tech background and strategic mindset.</p>
                        <p>- Excellent communication and leadership skills.</p>
                        <li>Benefits:</li>
                        <p>- Competitive salary and benefits package.</p>
                        <p>- Opportunity to drive tech innovation.</p>
                        <p>- Collaborative and dynamic work environment.</p>
                        <li>How to Apply:</li>
                        <p> - Submit your resume and cover letter.</p>
                        <p>- Showcase your tech leadership experience.</p>
                        <p>- Join us in shaping the future through innovation!</p>
                    </ol>
                </div>
            </div>
        </div>

    )
}

export default Requireddetail;
