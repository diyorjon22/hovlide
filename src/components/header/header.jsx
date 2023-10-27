import './header.css'
import headImg from '../../assets/images/amirde 2.svg'
import { Fade } from 'react-awesome-reveal'
import Modal from '../modal/modal'
import { useState } from 'react'

const Header = () => {


    const [modal, setModal] = useState(false)

    const deleteBtn = () => {
        setModal(false)
    }

    return (
        <div className='site-header'>
            <div className='container'>
                <div className='header'>
                    <Fade direction='left'>
                        <div className='img-box'>
                            <img src={headImg} alt="headImg" />
                            <div className='img-text'>
                                <h2>AMIRDEES</h2>
                                <p>Muhammadamir Xolmatov</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='right'>
                        <div className='title-box'>
                            <h2><span>ONLINE KURS</span> START 5 NOYABR</h2>
                            <h1>HOVLI UY</h1>
                            <h3>Hovli uy LOYIHASIni noldan ko'tarish va <br /> Render sifatini oshirish bo'yicha 1 oylik kurs</h3>
                            <h4>Kursda qatnashib, 4 yillik tajribaga ega Arxitektor & dizayner <br /> Muhammadamir
                                Xolmatov bilan oson va tezroq o’rganing</h4>
                            <button onClick={() => setModal(true)}>KURSGA YOZLISH</button>
                            <h5>Bu kurs Sizning oldingizda turgan <br /> to’siqlarni yengib o’tishga yechim <br />
                                bo’lishi mumkin</h5>
                        </div>
                    </Fade>
                </div>
                {modal &&
                    <Modal deleteBtn={deleteBtn} />
                }
            </div>
        </div>
    )
}

export default Header
