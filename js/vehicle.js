import DriverApi from './Api'
//Vehicle Register Page//
const vechicle_submit = document.getElementById('vechicle_submit')
const registration_number = document.getElementById('registration_number')
const vechicle_manufacturer = document.getElementById('vechicle_manufacturer')
const vechicle_model = document.getElementById('vechicle_model')
const vechicle_color = document.getElementById('vechicle_color')
const plate_number = document.getElementById('plate_number')
const number_sits = document.getElementById('number_sits')
const insurance_company = document.getElementById('insurance_company')
const insurance_policy = document.getElementById('insurance_policy')
const popup = document.getElementById('popup')
//------//

//Popup Event
popup.addEventListener('click',function (e) {
    popup.classList.remove('open')
})

//Vechicle Submit
const submitVehicle = async () => {
    try {
        await DriverApi.post('/driver/vehicle', {
            registrationNumber:registration_number.value,
            manufacturer: vechicle_manufacturer.value,
            model: vechicle_model.value,
            color: vechicle_color.value,
            sitNumber: number_sits.value,
            insuranceCompany: insurance_company.value,
            insurancePolicy: insurance_policy.value,
        })
        window.location.href = "/payment.html"
        
    } catch (err) {
        popup.classList.add('open')
    }
}
//Submit Event
vechicle_submit.addEventListener('click', function (e) {
    submitVehicle()
    
    e.preventDefault()
})