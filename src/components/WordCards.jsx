
import photo from '../assets/dog.jpg'

export function Works(){
    return(
        <section className='works' id='works'> 
             <div><h2>Works</h2></div>
            <div className='cards-container'>
               
            
            <div className="box-card">
                <div className='card'>
                    
                    <div className='card-img'>
                        <img src={photo} alt="" />
                        
                    </div>
                    <div className='card-detail'>
                            <ul>
                                <li><h2>Solaris</h2></li>
                                <li><a href='#about_me'>www.solaris.com</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="box-card">
                <div className='card'>
                    
                    <div className='card-img'>
                        <img src={photo} alt="" />
                        
                    </div>
                    <div className='card-detail'>
                            <ul>
                                <li><h2>Solaris</h2></li>
                                <li><a href='#about_me'>www.solaris.com</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="box-card">
                <div className='card'>
                    
                    <div className='card-img'>
                        <img src={photo} alt="" />
                        
                    </div>
                    <div className='card-detail'>
                            <ul>
                                <li><h2>Solaris</h2></li>
                                <li><a href='#about_me'>www.solaris.com</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            
            
            
            
           
        </div>
        </section>

    )
  
}

{/* <div className="card-img">
                    <img src={photo} alt="" />
                </div>
                <div className='arrow-container'>
                    <input type="checkbox" id="check-work"></input>
                    <div className='arrow'>
                        <label htmlFor=""><i id="arrow-work"><UpOutlined/></i></label>
                    </div>
                    
                </div> */}