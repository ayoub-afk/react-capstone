import './About.css'
import './Booking.css'



function AboutCom(){

    return(
       <section id='about' className="about-sec bgc-p1 rounded20">
            <img className='img1 rounded20' src='../src/assets/ma1.jpg'></img>
            <img className='img2 rounded20' src='../src/assets/ma2.jpg'></img>

            <div className="disc">
                <h1 className='tc-p2'>
                    Little Lemon
                </h1>
                <h2  style={{color:'white', fontSize:'2.5rem'}}  id="subel">
                    Chicago
                </h2>
                <p  style={{color:'white',fontSize:'1.5rem'}}>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                     We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                     We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                </p>
            </div>


       </section>
    )
}


export default AboutCom;