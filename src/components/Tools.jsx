
import { Carousel } from 'antd';


export function Tools(){
    return(
      <section className='tools-container'>
        <div className='skill'>
          <h2 >Skills</h2>
          <span>Aquí encontrarás las habilidades en las cuales desempeño mi vida profesional espero que cumpla con las expectativas y las cualidades que busca.</span>
        </div>
        
        <div className='tools'>

          <Carousel autoplay>
          <div className='slider'>
            
            <div className='react'></div>
          </div>
          <div className='slider'>
            <div className='html5'></div>
          </div>
          <div className='slider'>
            
            <div className='css'></div>
          </div>
          <div className='slider'>
           
            <div className='python'></div>
          </div>
          <div className='slider'>
            
            <div className='django'></div>
          </div>
          <div className='slider'>
            
            <div className='git'></div>
          </div>
        
    
    
    
          </Carousel>
        </div>
        
      

  </section>
    )
  
}

