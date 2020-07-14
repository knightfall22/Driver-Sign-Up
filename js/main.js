(function($) {

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

  $('#register-form').validate({
    rules : {
        full_name : {
            required: true,
        },
        state : {
            required: true,
        },
        company : {
            required: true
        },
        company_address : {
            required: true
        },
        password : {
            required: true
        },
        email : {
            required: true,
            email : true
        },
        phone_number : {
            required: true,
        },
        registration_number : {
            required: true,
        },
        vechicle_manufacturer : {
            required: true,
        },
        vechicle_model : {
            required: true,
        },
        vechicle_color : {
            required: true,
        },
        plate_number : {
            required: true,
        },
        number_sits : {
            required: true,
        },
        insurance_company : {
            required: true,
        },
        insurance_policy : {
            required: true,
        },
    },
    onfocusout: function(element) {
        $(element).valid();
    },
});

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });
})(jQuery);