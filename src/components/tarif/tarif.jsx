import './tarif.css'
import imgde from '../../assets/images/Vector 14.png'
import { Fade } from 'react-awesome-reveal'
import Modal from '../modal/modal'
import { useState } from 'react'

const Tarif = () => {

    const [endModal, setEndModal] = useState(false)

    const deleteBtn2 = () => {
        setEndModal(false)
    }

    return (
        <div className='site-tarif'>
            <div className='container'>
                <Fade direction='bottom-left'>
                    <h1>KURS TARIFLARI</h1>
                </Fade>
                <div className='tarif'>
                    <div className='tarif-first'>
                        <div className='tarif-model'>
                            <div className='model-start'>
                                <div>
                                    <img src={imgde} alt="" />
                                </div>
                                <div>
                                    <h2>MODELLASHTIRISH</h2>
                                    <p>Video darsliklar</p>
                                </div>
                            </div>
                            <div className='model-texts'>
                                <p>Binoni kotarish</p>
                                <p>Tom qismi</p>
                                <p>Deraza eshiklar bilan ishlash</p>
                                <p>3d Modellar bilan ishlash</p>
                                <h3 className='model-texts_h3'>950.000 UZS</h3>
                                
                            </div>
                        </div>
                        <h5></h5>
                        <div className='tarif-vizual'>
                            <div className='model-start'>
                                <div>
                                    <img src={imgde} alt="" />
                                </div>
                                <div>
                                    <h2>VIZUALIZATSIYA</h2>
                                    <p>Video darsliklar</p>
                                </div>
                            </div>
                            <div className='model-texts'>
                                <p>Texturalar bilan ishlash</p>
                                <p>Kechki atmosfera</p>
                                <p>Kunduzgi atmosfera</p>
                                <p>Animatsiya (kamera/quyosh/hdri)</p>
                                <p>Render sozlash</p>
                                <p>Motion blur / focus</p>
                                <p>Post obrabotka</p>
                                <h3 className='model-h3'>950.000 UZS</h3>
                                <h4>JOYLAR SONI: CHEKLANMAGAN</h4>
                            </div>
                        </div>
                    </div>
                    <div className='tarif-second'>
                        <div className='tarif-model'>
                            <div className='model-start'>
                                <div>
                                    <img src={imgde} alt="" />
                                </div>
                                <div>
                                    <h2>STANDART</h2>
                                    <p>Video darsliklar</p>
                                </div>
                            </div>
                            <div className='model-texts'>
                                <p>Autocaddan 3ds maxga planni olib kirish</p>
                                <p>Modellashirish</p>
                                <p>3d Modellar bilan ishlash</p>
                                <p>Texturalar bilan ishlash</p>
                                <p>Kechgi atmosfera</p>
                                <p>Kunduzgi atmosfera</p>
                                <p>Animatsiya (kamera/quyosh/hdri)</p>
                                <p>Render sozlash</p>
                                <p>Motion blur / focus</p>
                                <p>Post obrabotka</p>
                                <p className='cd'><strike>3d modellar va materiallar <br /> (o’zimiz yasagan modellar bazasi)</strike></p>
                                <p className='cd'><strike>360 vr TOUR (teleport)</strike></p>
                                <p className='cd'><strike>Yopiq guruh</strike></p>
                                <p className='cd'><strike>Uyga vazifalar</strike></p>
                                <p className='cd'><strike>Savol-javoblar</strike></p>
                                <p className='cd'><strike>Zoom orqali online suxbat</strike></p>
                                <p className='cd'><strike>Sertifikat online</strike></p>
                                <h3 className='model-h3'>1.550.000 UZS</h3>
                                <h4>JOYLAR SONI: CHEKLANMAGAN</h4>
                            </div>
                        </div>
                    </div>
                    <div className='tarif-third'>
                        <div className='tarif-model'>
                            <div className='model-start'>
                                <div>
                                    <img src={imgde} alt="" />
                                </div>
                                <div>
                                    <h2>PRO</h2>
                                    <p>Video darslik va amaliyot</p>
                                </div>
                            </div>
                            <div className='model-texts'>
                                <p>Autocadda fasad go’yasini chizish</p>
                                <p>Modellashirish</p>
                                <p>3d Modellar bilan ishlash</p>
                                <p>Texturalar bilan ishlash</p>
                                <p>Kechki atmosfera</p>
                                <p>Kunduzgi atmosfera</p>
                                <p>Animatsiya (kamera/quyosh/hdri)</p>
                                <p>Render sozlash</p>
                                <p>Motion blur / focus</p>
                                <p>Post obrabotka</p>
                                <p>3d modellar va materiallar <br /> (o’zimiz yasagan modellar bazasi)</p>
                                <p>360 vr TOUR (teleport)</p>
                                <p>Yopiq guruh</p>
                                <p>Uyga vazifalar</p>
                                <p>Savol-javoblar</p>
                                <p>Zoom orqali online suxbat</p>
                                <p>Sertifikat online</p>
                                <h3 className='model-h3'>2.950.000 UZS</h3>
                                <h4>JOYLAR SONI: 20 TA</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last-one'>
                    <button className='last-one__btn' onClick={() => setEndModal(true)}>KURSGA YOZLISH</button>
                    <p>Bu kurs Sizning oldingizda turgan to’siqlarni <br /> yengib o’tishga yechim bo’lishi mumkin</p>
                </div>

                {  endModal && 
                    <Modal deleteBtn={deleteBtn2}/> 
                }

            </div>
        </div>
    )
}

export default Tarif
