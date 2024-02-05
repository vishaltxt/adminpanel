import './completed.css'
import React from 'react'
import bell from './images/notifications_active.png'
import work from './images/work (1).png'
import accept from './images/article.png'
import library1 from './images/library_add_check (1).png'
import profile from './images/Businessman.png'
import search from './images/search.png'
import component from './images/Component 33.png'
import check from './images/check.png'
import { Link } from 'react-router-dom'
const Completed = () => {
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
            <div className='header-mid'>
                <div className='work-flex'>
                    <img className='same' src={work} alt=''></img>
                    <p className='same-p'><Link to="/">Job Requirements</Link></p>
                </div>
                <div className='work-flex'>
                    <img className='same' src={accept} alt=''></img>
                    <p className='same-p'><Link to="/accepted">Accepted</Link></p>
                </div>
                <div className='work-flex'>
                    <img className='same' src={library1} alt=''></img>
                    <p className='same-p switch'>Completed Requirement</p>
                </div>
            </div>
            <div id='accepted-bg'>
                <div className="accepted-container">
                    <div className='inp'>
                        <img id='search' src={search} alt=""></img>
                        <input className='accepted-input' type='text' placeholder='          Search for Company'></input>
                    </div>
                    <div className='accept-header-lower'>
                        <div className='accept-work-flex'>
                            <img className='accept-profile' src={profile} alt=""></img>
                            <p className='accept-dev'>Chief Tecnical Officer(CTO)</p>
                        </div>
                        <div>
                            <p className='accept-experience'>Experience req</p>
                            <p className='accept-intern'>Intern</p>
                        </div>
                        <div>
                            <p className='accept-experience'>Date of joining</p>
                            <p className='accept-intern'>25/01/2024</p>
                        </div>
                        <div>
                            <button className='manage-btn-undo'>Undo</button>
                            <img className='component-1' src={component} alt=''></img>
                            <img className='check-1' src={check} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Completed;

