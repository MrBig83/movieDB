import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'



const MyMovies = () => {

    return (
        <div>
           <FontAwesomeIcon icon={faEye} />
            <p className='seennumber'>0</p>
        </div>
    )
}
export default MyMovies;