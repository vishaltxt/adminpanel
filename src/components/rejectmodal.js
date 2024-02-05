import './rejectmodal.css'

const Reject = ({ closeRejectmodal }) => {
    return (
        <div className='first-container'>
            <div className='second-container'>
                <p>Are you sure you want to reject this company?</p>
                <div className='modal-buttons'>
                    <button className='yes' onClick={closeRejectmodal}>Yes</button>
                    <button className='no' onClick={closeRejectmodal}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Reject;
