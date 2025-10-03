import './About.css'
import './Booking.css'



function HeaderCom (){
       return(
       <section className="  Hero-sec rounded20">
                <div className="hero-bg rounded20">
                </div>
            <div className="disc-hero">
                <h1 className='tc-p2'>
                    Little Lemon
                </h1>
                <h2  style={{color:'white', fontSize:'2.5rem'}}  id="subel1">
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
                <input type="button" value="Order now" />
            </div>
            <img  className='rounded20 img3' src='../src\assets\restauranfood.jpg'></img>


       </section>
    )
}


export default HeaderCom