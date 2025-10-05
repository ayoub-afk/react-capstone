import { useForm } from 'react-hook-form';
import './Booking.css'

function BookingFormCom(props){
    let regexEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexNumber = /^[0-9]/;
    let regexDate = /^[0-9][0-9]+.+[0-9][0-9]+.+[0-9][0-9][0-9][0-9]/;
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

    return (
        
                <form  onSubmit={handleSubmit(onSubmit)} id="booking-sec" className='bgc-p1 rounded20'>
                    <div className="bookinfo bgc-s3 rounded20">
                        <label>
                           Date
                        </label>

                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("date1" , {
                            required:true,
                            pattern: regexDate

                        })}
                        ></input>
                        <br />
                            {
                            errors.date1 && (
                                
                                <span>
                                    Please write in the form DD.MM.YYYY
                                </span>
                            )
                        }
                        </div>


                        <label>
                            time
                        </label>
                        <div>
                            <select style={{textIndent: '0'}}  className='rounded20 infi' name="time" id="time" 
                            {...register("time" , {
                                required:true
                            })}
                            >
                                <option value="">Click</option>
                                <option value={props.timec[0]}>{props.timec[0]}</option>
                                <option value={props.timec[1]}>{props.timec[1]}</option>
                                <option value={props.timec[2]}>{props.timec[2]}</option>
                                <option value={props.timec[3]}>{props.timec[3]}</option>
                            </select>
                            {
                                errors.time && (
                                    <span>
                                        Required
                                    </span>
                                )
                            }

                        </div>



                       <label>
                            occasion
                        </label>

                        <div>
                            <select style={{textIndent: '0'}} className='rounded20 infi' name="occasion" id="occasion"
                                {...register("occ" , {
                                    required:true
                                })}
                            >
                                <option value="">Click</option>
                                <option value="Celebration">Celebration</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                            {
                                    errors.occ && (
                                        <span>
                                            Required
                                        </span>
                                    )
                                }

                        </div>


                 <label>
                            Seating Option
                        </label>

                        <div>
                            <select style={{textIndent: '0'}} className='rounded20 infi' name="so" id="so"
                                {...register("so" , {
                                    required:true
                                })}
                            >
                                <option value="">Click</option>
                                <option value="Inside">Inside</option>
                                <option value="Outside">Outside</option>
                            </select>
                            {
                                    errors.so && (
                                        <span>
                                            Required
                                        </span>
                                    )
                                }

                        </div>
                                                <label>
                            Num of visitors
                        </label>

                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("nv" , {
                            required:true,
                            pattern: regexNumber,
                            min:1,
                            max:10

                        })}
                        ></input>
                        <br />
                            {
                            errors.nv && (
                                
                                <span>
                                    At least one visitor and max 10 visitors
                                </span>
                            )
                        }
                        </div>



                    </div>





                    
                    <div className="personalinfo bgc-s3 rounded20">
                        <label>
                            First Name
                        </label>
                        <div>
                        <input className='rounded20 infi' type='text' 
                        {...register("fname" , {
                            required:true,
                            minLength:3
                        })}
                        />
                        {
                            errors.fname && (
                                <span>
                                    Should be at least 3 characters 
                                </span>
                            )
                        }
                        </div>

                        <label>
                            last Name
                        </label>
                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("lname" , {
                            required:true,
                            minLength:3
                        })}
                        ></input>
                            {
                            errors.lname && (
                                <span>
                                    Should be at least 3 characters 
                                </span>
                            )
                        }
                        </div>

                       <label>
                            Phone Number 
                        </label>
                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("phone" , {
                            required:true,
                            minLength:6,
                            pattern: regexNumber
                        })}
                        ></input>
                            {
                            errors.phone && (
                                <span>
                                    Should be at least 6 digits 
                                </span>
                            )
                        }
                        </div>
                        <label>
                            Email
                        </label>
                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("email" , {
                            required:true,
                            pattern: regexEmail
                        })}
                        ></input>
                            {
                            errors.email && (
                                <span>
                                    Please enter a valid email 
                                </span>
                            )
                        }
                        </div>
                        <label>
                            spec request
                        </label>
                        <input className='rounded20 infi' type='text' ></input>
                    </div>
                    <div className="checkout bgc-s3 rounded20">
                        <label>
                            Card Number
                        </label>
                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("card" , {
                            required:true,
                            minLength:10,
                            pattern: regexNumber

                        })}
                        ></input>
                        <br />
                            {
                            errors.card && (
                                
                                <span>
                                    Should be at least 10 digits 
                                </span>
                            )
                        }
                        </div>
                        

                        <label>
                            Exp Date
                        </label>

                        <div>
                        <input className='rounded20 infi' type='text' 
                         {...register("date" , {
                            required:true,
                            pattern: regexDate

                        })}
                        ></input>
                        <br />
                            {
                            errors.date && (
                                
                                <span>
                                    Please write in the form DD.MM.YYYY
                                </span>
                            )
                        }
                        </div>



                             <label>
                            CVV
                        </label>

                        <div>
                        <input className='rounded20 infi' type='password' 
                         {...register("cvv" , {
                            required:true,
                            pattern: regexNumber,
                            maxLength :3,
                            minLength:3

                        })}
                        ></input>
                        <br />
                            {
                            errors.cvv && (
                                
                                <span>
                                    should be 3 digits
                                </span>
                            )
                        }
                        </div>
                        <input className='btn1' type="submit" value="Checkout" />
                        
                    </div>
                </form>
        
    )



}

export default BookingFormCom;