import './viewmodel.css'
import profile from './images/Businessman.png'

const ViewModal = ({ closeViewmodal }) => {
    return (
        <div className='view-container'>
            <div className='view-second-container'>
                <div id='mains'>
                    <div className='view-buttons'>
                        <button className='view-accept' onClick={closeViewmodal}>Accept</button>
                        <button className='view-reject' onClick={closeViewmodal}>Reject</button>
                    </div>
                    <div className='view-company'>
                        <p className='view-company-p'>Company</p>
                        <p className='krinvi'>Krinvi Technologies</p>
                    </div>
                    <div className='view-mid'>
                        <div className='view-profile'>
                            <img className='view-img' src={profile} alt=""></img>
                            <p className='cto'>Chief Technical Officer(CTO)</p>
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
                    <div className='view-end'>
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
            </div>
        </div>
    )
}

export default ViewModal;
