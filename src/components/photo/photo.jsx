import './photo.css'
import { Fade } from 'react-awesome-reveal'
import { Bounce } from 'react-awesome-reveal'
import img1 from '../../assets/images/010000 1.png'
import img2 from '../../assets/images/001 1.png'
import img3 from '../../assets/images/0040000 1.png'


const Photo = () => {

    return (
        <div className='site-photo'>
            <div className='container'>
                <Fade direction='bottom-left'>
                    <h1>Kurs ushbu 3 ta ATMOSFERANI yaratishni <br /> o'z ichiga oladi:</h1>
                </Fade>
                <Bounce>
                    <div className='photo'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    </div>
                </Bounce>
            </div>
        </div>
    )
}

export default Photo
