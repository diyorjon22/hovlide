import './info.css'
import icon1 from '../../assets/images/Group 5 (7).svg'
import icon2 from '../../assets/images/Vector.svg'
import icon3 from '../../assets/images/Group 6.svg'
import icon4 from '../../assets/images/Vector (5).svg'
import icon5 from '../../assets/images/Vector (6).svg'
import icon6 from '../../assets/images/Vector (7).svg'
import icon7 from '../../assets/images/Group 2.svg'
import icon8 from '../../assets/images/Group 7.svg'
import { Fade } from 'react-awesome-reveal'

const Info = () => {
    return (
        <div className='site-info'>
            <div className='container'>
                <Fade direction='bottom-left'><h1>NEGA AYNAN USHBU KURS</h1></Fade>
                <div className='info'>
                    <Fade direction='left'>
                        <div className='info-icons'>
                            <div className='icons'>
                                <img src={icon1} alt="" />
                                <h3>Haqiqiy tajribaga ega <br /> insondan o’rganish</h3>
                            </div>
                            <div className='icons'>
                                <img src={icon2} alt="" />
                                <h3>Arxitektura standartlari</h3>
                            </div>
                            <div className='icons'>
                                <img src={icon3} alt="" />
                                <h3>Oson modellashtrish</h3>
                            </div>
                            <div className='icons4'>
                                <img src={icon4} alt="" />
                                <h3>3d modellar va materiallar </h3>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='right'>
                        <div className='info-icons'>
                            <div className='icons'>
                                <img src={icon5} alt="" />
                                <h3>Darsliklar qisqa videoda ko’p <br /> malumotlar berilishi</h3>
                            </div>
                            <div className='icons'>
                                <img src={icon6} alt="" />
                                <h3>Kameralarni to’gri qo’yish</h3>
                            </div>
                            <div className='icons'>
                                <img src={icon7} alt="" />
                                <h3>Xatolarni tekshirish (Feedback)</h3>
                            </div>
                            <div className='icons8'>
                                <img src={icon8} alt="" />
                                <h3>Savol javoblar(Zoom)</h3>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <center> <hr /></center>
        </div>
    )
}

export default Info
