// import './acceptmodel.css'

const UpdateModal = ({ closeupdate }) => {
    return (
        <div className='first-container'>
            <div className='second-container'>
                <p>Are you sure the requirement of company is fulfilled?</p>
                <div className='modal-buttons'>
                    <button className='yes' onClick={closeupdate}>Yes</button>
                    <button className='no' onClick={closeupdate}>No</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal;
