import './Booking.css'

function BookingCom(){


    return (
        
                <form id="booking-sec" className='bgc-p1 rounded20'>
                    <div className="bookinfo bgc-s3 rounded20">
                        <h4>
                            date
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            time
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            occasion
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            Seation Option
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            Number of visitors
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                    </div>
                    <div className="personalinfo bgc-s3 rounded20">
                        <h4>
                            name
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            last name
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            phone
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            email
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            pass
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            spec request
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                    </div>
                    <div className="checkout bgc-s3 rounded20">
                        <h4>
                            card
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        
                        <h4>
                            exo date
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <h4>
                            other info
                        </h4>
                        <input className='rounded20 infi' type='text' placeholder='Date'></input>
                        <input type="button" value="checkout" />
                        
                    </div>
                </form>
        
    )



}

export default BookingCom;