
import { Carousel } from 'antd';


export function Tools(){
    return(
      <section className='tools-container'>
        <div className='skill'>
          <h2 >Skills</h2>
          <span>Here you will find the skills in which I carry out my professional life. I hope it meets the expectations and qualities you are looking for.

</span>
        </div>
        
        <div className='tools'>

          <Carousel autoplay>
          <div className='slider'>
            <h2>React</h2>
            <div className='react'></div>
          </div>
          <div className='slider'>
            <h2>HTML</h2>
            <div className='html5'></div>
          </div>

          <div className='slider'>
            <h2>CSS</h2>
            <div className='css'></div>
          </div>
          <div className='slider'>
          <h2>Python</h2>
            <div className='python'></div>
          </div>
          <div className='slider'>
          <h2>Django</h2>
            <div className='django'></div>
          </div>
          <div className='slider'>
          <h2>Git</h2>
            <div className='git'></div>
          </div>
        
    
    
    
          </Carousel>
        </div>
        
      

  </section>
    )
  
}

