import { Link, useNavigate } from 'react-router-dom'

const Register = (e) => {

    const navitage = useNavigate()

    const onsubmit = (e) => {
        e.preventDefault()
        // send form to backend with fetch/axios


        navitage('/')
    }




    return (
        <div>
            <div>
                <Link to="/">flights</Link>
            </div>
            <button onClick={onsubmit}>Submit form</button>
        </div>
    )
}

export default Register