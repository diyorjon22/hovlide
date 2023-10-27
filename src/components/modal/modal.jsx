import './modal.css'
import { Zoom } from 'react-awesome-reveal'
import { Input } from "@material-tailwind/react";

const Modal = ({deleteBtn}) => {

    return (
        <div className='modal-wrapper'>
        <div className='overlay'>
            <Zoom>
                <div className='modal'>
                    <div className='modal-nav'>
                        <p>Ro'yhatdan O'ting</p>
                        <button onClick={deleteBtn} className='nav-btn'>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <form className='form'>
                            <Input size='lg' label='Name' icon={<i className="fas fa-user" />}/>
                            <Input size='lg' label='Phone Number' icon={<i class="fa-solid fa-phone"></i>}/>
                    </form>
                    <button className='modal-btn'>Jo'natish</button>
                </div>
            </Zoom>
        </div>
    </div>
    )
}

export default Modal
