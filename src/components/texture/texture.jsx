import './texture.css'
import img1 from '../../assets/images/model 1.svg'
import img2 from '../../assets/images/tajj 1.svg'
import img3 from '../../assets/images/001+++ 1.svg'
import { Fade } from 'react-awesome-reveal'



const Texture = () => {
    return (
        <div className='site-texture'>
            <div className='container'>
                <h1>KURS TARKIBI</h1>
                <div className='texture'>
                    <Fade direction='left'>
                        <div className='texture-first'>
                            <div className='first-img'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='first-text'>
                                <h2>3D modellashtirish</h2>
                                <p>1. Binoni ko’tarish</p>
                                <p>2. Tom qismi</p>
                                <p>3. Deraza eshiklar bilan ishlash</p>
                                <p>4. Bezaklar bilan ishlash</p>
                                <p>5. 3d Modellar bilan ishlash</p>
                            </div>
                        </div>
                    </Fade>
                    <center><h6></h6></center>
                    <Fade direction='right'>
                        <div className='texture-first2'>
                            <div className='first-text'>
                                <h2>VIZUALIZATSIYA</h2>
                                <p>1. Texturalar bilan ishlash</p>
                                <p>2. Kechki atmosfera</p>
                                <p>3. Kunduzgi atmosfera</p>
                                <p>4. Animatsiya (kamera/quyosh/hdri)</p>
                                <p>5. Render sozlash</p>
                                <p>6. Motion blur / focus</p>
                                <p>7. Post obrabotka</p>
                                <p>8. 3 xil scena</p>
                            </div>
                            <div className='first-img'>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </Fade>
                    <center><h6></h6></center>
                    <Fade direction='left'>
                        <div className='texture-first3'>
                            <div className='first-img'>
                                <img src={img2} alt="" />
                            </div>
                            <div className='first-text'>
                                <h2>AMALIYOT / TAJRIBA</h2>
                                <p>1. Yopiq guruh </p>
                                <p>2. Uyga vazifalar</p>
                                <p>3. Uyga vazifalarni tekshirish</p>
                                <p>4. Savol javoblar</p>
                                <p>5. Zoom orqali online suxbat</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Texture