import './About.css'
import './Booking.css'


function FoodCom (){

    return (
        <section className='food-sec rounded20'>
            <div className="card  rounded20">
                <img className='rounded20' src="src\assets\greek salad.jpg" alt="" />
                <div style={{padding:'20px'}}>
                <h4 style={{marginBottom:'20px'}}>
                    Greek Salad
                </h4>
                <p style={{marginBottom:'70px'}}>
                    Here is the dish description Here is
                     the dish description HereHere is the dish description He
                     re is the dish description Here is the dish descriptiont is 
                     the dish descriptiont
                </p>
                <h6>
                    Order a delivery
                </h6>
                </div>
            </div>
            <div className="card">
                <img className='rounded20' src="src\assets\lemon dessert.jpg" alt="" />
                <div style={{padding:'20px'}}>
                <h4 style={{marginBottom:'20px'}}>
                    Bruchetta
                </h4>
                <p style={{marginBottom:'70px'}}>
                    Here is the dish description Here is
                     the dish description HereHere is the dish description He
                     re is the dish description Here is the dish descriptiont is 
                     the dish descriptiont
                </p>
                <h6>
                    Order a delivery
                </h6>
                </div>
            </div>
            <div className="card">
                <img className='rounded20' src="src\assets\lemon dessert.jpg" alt="" />
                <div style={{padding:'20px'}}>
                <h4 style={{marginBottom:'20px'}}>
                    Lemon Dessert
                </h4>
                <p style={{marginBottom:'70px'}}>
                    Here is the dish description Here is
                     the dish description HereHere is the dish description He
                     re is the dish description Here is the dish descriptiont is 
                     the dish descriptiont
                </p>
                <h6>
                    Order a delivery
                </h6>
                </div>
            </div>
        </section>

    )
}


export default FoodCom;