import {UnorderedListOutlined} from '@ant-design/icons'
import logo from '../assets/logo4.png'




export function Navigation(){
    return (
        <nav>
            <input type="checkbox" id="check"></input>
            <label htmlFor='check' className="checkbtn">
                <i className="fas fa-bars"><UnorderedListOutlined /></i>
            </label>
            <a href="#" className="enlace">
                <img src={logo} alt="" className='logo'/>
            </a>

            <ul>
                <li><a  href='/'>Home</a></li>
                <li><a href='/'>About me</a></li>
                <li><a href='/'>Works</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>
    )
}