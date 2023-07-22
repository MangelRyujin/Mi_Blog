

import dog from '../assets/me_avatar.jpg'

export function SectionMe(){
    return (
        <section id='about_me' className="me_container">
            <div className='my_img'>
                <img src={dog} alt="" />
            </div>
            <div className='my_information'>
                <h2>Miguel Angel Fernández Rodríguez</h2>
                <div className='my_life'>
                    <span>Passionate about the world of computers since I was a child. Graduated as a Computer Engineer where I learned about the great world of programming and how it solves problems in everyday life. I have made my way through the world of back end development using the python language.</span>
                </div>
                
            </div>
        
            
        </section>
        
    )
}