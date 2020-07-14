window.localStorage;
import DriverApi from './Api'

//Driver Signup Page//
const fullName = document.querySelector('#full_name')
const password = document.getElementById('password')
const state = document.getElementById('state')
const businessName = document.getElementById('company')
const businessAddress = document.getElementById('company_address')
const phoneNumber = document.getElementById('phone_number')
const email = document.getElementById('email')
const submit = document.getElementById('submit')
const popup = document.getElementById('popup')
//------//

//Popup Event
popup.addEventListener('click',function (e) {
    popup.classList.remove('open')
})

//Driver Request
const submitDriver = async () => {
    try {
        const response = await DriverApi.post('/driver/signup', {
            email:email.value,
            password: password.value,
            state: state.value,
            phoneNumber: phoneNumber.value,
            fullName: fullName.value,
            businessName: businessName.value,
            businessAddress: businessAddress.value,
        })

        localStorage.removeItem('token')
        const token = response.data.token
        localStorage.setItem('token',token)
        
        window.location.href = "http://localhost:1234/vehicle.html"
    } catch (err) {
        popup.classList.add('open')
    }
}



//Submit Event
submit.addEventListener('click',  (e) => {
    submitDriver()
    e.preventDefault()
}) 

