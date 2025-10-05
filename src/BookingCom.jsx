import AboutCom from "./AboutCom";
import BookingFormCom from "./BookingFormCom";
import FoodCom from "./FoodCom";
import FooterCom from "./FooterCom";
import NavigationBar from "./NavigationBar";
import ReviewCom from "./ReviewCom";

function BookingCom(){

    let timec =['10AM','12AM','3PM','5PM'] 
return (

    <>
        <NavigationBar />
       <BookingFormCom timec={timec}/>

        <FoodCom/>
         <ReviewCom />

       <AboutCom />
       <FooterCom/>
    </>
)

}


export default BookingCom;