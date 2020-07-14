import DriverApi from './Api'
//Payment Register Page//
const payment_submit = document.getElementById('payment_submit')
const bankName = document.getElementById('bank_name')
const accountNumber = document.getElementById('account_number')
const accountName = document.getElementById('account_name')
const popup = document.getElementById('popup')
//------//

//Popup Event
popup.addEventListener('click',function (e) {
    popup.classList.remove('open')
})

//Payment Request
const submitPayment = async () => {
    try {
        const response = await DriverApi.post('/driver/payment', {
            bankName: bankName.value,
            accountNumber: accountNumber.value,
            accountName: accountName.value
        })
        popup.classList.add('open')
    } catch (err) {
        popup.classList.add('open')
    }
}

//Submit Event
payment_submit.addEventListener('click',  (e) => {
    submitPayment()
    e.preventDefault()
})