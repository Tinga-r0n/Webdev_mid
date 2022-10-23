
jQuery.validator.addMethod("name_regex", function(value, element) {
    return this.optional(element) || /^[a-zA-z\.\-_Jr., Sr., II III]{1,30}$/i.test(value);
}, "No special characters");

jQuery.validator.addMethod("phone_regex", function(value, element) {
    return this.optional(element) || /^[0-9\.\+63\_]{13}$/i.test(value);
}, "Phone Number  Must should start +63");


jQuery.validator.addMethod("password_regex", function(value, element) {
    return this.optional(element) || /[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[A-Z]/.test(value);
}, "Password of atleast 8 characters.");


$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');


$("#contactForm").validate({
    rules: {

        'firstname': {
            required: true,
            minlength: 1,
            name_regex: true,
        },
        'lastname': {
            required: true,
            minlength: 1,
            name_regex: true
        },
        'email': {
            required: true,
            email: true
        },
        'phone': {
            required: true,
            phone_regex: true,
            minlength: 13
        },
        'password': {
            required: true,
            password_regex: true,
            minlength: 8
          
            

        },
        'confirmpassword': {
            equalTo: '#password'
        }
       
    },

    messages: {

        'firstname': {
            required: "The firstname field is required!",
        },
        'lastname': {
            required: "The lastname field is required!",
        },
        'email': {
            required: "The Email is required!",
            email: "Please enter a valid email address!"
        },
        'phone': {
            required: "The phone field is required!",
            phone_regex:"Please enter a valid phone number!"

        },
        'password': {
            required: "The password field is required!",
            password_regex: "Password must have atleast one uppercase/lowercase letter,number and speciall character"
          
            
        },
        'confirmpassword': {
            equalTo: "The two passwords do not match!"
        }
       
    },
    submitHandler: function(form) {
        form.submit( );
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Account Created Successfully!',
            showConfirmButton: true,
            timer: 10900
          })
          alert("Account Created Successfully!");

       
        }    
});



