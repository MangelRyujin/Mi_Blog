



export function ContacForm(){
    return (
        <section id="contact" className="container">
            <div className="box">
                <div className="form">
                    <h2>Contact</h2>
                    <div className="inputBox">
                        <input type="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Message</span>
                        <i></i>
                    </div>
                    <button id="btncontact"><span>Send</span></button>
                    
                </div>
            </div>
        
            
        </section>
        
    )
}