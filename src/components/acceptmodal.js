import './acceptmodel.css'

const MyModal = ({ closeModal }) => {
    return (
        <div className='first-container'>
            <div className='second-container'>
                <p>Are you sure you want to consider this company?</p>
                <div className='modal-buttons'>
                    <button className='yes' onClick={closeModal}>Yes</button>
                    <button className='no' onClick={closeModal}>No</button>
                </div>
            </div>
        </div>
    )
}

export default MyModal;
