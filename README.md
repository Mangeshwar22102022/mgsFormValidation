mgsFormValidation

A lightweight JavaScript form validation and utility library for quick input validation, event handling, and form submission with error handling.
All functions are globally available via window.

Installation
npm install mgsformvalidation

Available Functions
## 1. mgsOnlyNumber

Restricts input to numbers only.
mgsOnlyNumber('#phone')
or
mgsOnlyNumber('#phone, #pin');


Example:

mgsOnlyNumber('#phone');

## 2. mgsNumberDot

Allows numbers and a dot (.) (useful for decimal values).

mgsNumberDot(selector);

## 3. mgsCutCopyPaste

Disables cut, copy, and paste for the selected input(s).

mgsCutCopyPaste(selector);

## 4. mgsa2zSpace

Allows lowercase letters (a-z) and spaces.

mgsa2zSpace('#name');

## 5. mgsa2z

Allows lowercase letters only.

mgsa2z('#username');

## 6. mgsA2Zspace

Allows uppercase letters (A-Z) and spaces.

mgsA2Zspace('#title');

## 7. mgsA2Z

Allows uppercase letters only.

mgsA2Z('#code');

## 8. mgsa2Zspace

Allows both lowercase and uppercase letters with spaces.

mgsa2Zspace('#fullname');

## 9. mgsa2Z

Allows both lowercase and uppercase letters without spaces.

mgsa2Z('#name');

## 10. mgsisValidEmail

Checks if the provided email is valid.

let isValid = mgsisValidEmail('test@example.com');

## 11. mgsValidateEmail

Validates one or multiple email input fields by selector.

let check = mgsValidateEmail('.email, .emails');

## 12. mgsKeyupChange

Attaches an event listener to trigger a function on both keyup and change.
let allfields = ('.name,.email,.mobile,.image');
mgsKeyupChange(allfields);

## 13. mgsFormValidate

# Performs full form validation based on input attributes and rules.

let allfields = ('.name,.email,.mobile,.image');
let checkValidate = mgsFormValidate('#myForm');
check it

if(checkValidate){
    // logic here
}

## 14. msgSubmitData

# Submits form data via AJAX with loader, validation error handling, and redirect.

```
    Example Usage
    let allfields = ('.name,.email,.mobile,.image');
    mgsOnlyNumber('#phone');
    mgsValidateEmail('.email, .emails');

    if (mgsFormValidate(allfields)) {
        msgSubmitData({
            url:'http://localhost/mgs/user-add',    // API endpoint
            returnUrl:'http://localhost/mgs/user',  // Redirect URL after success
            formId:'$myForm',   // Form selector
            formData:{}    // FormData object,
            methodType: 'post'
        });
    }
```


## 📄 Usage via CDN

```
<!DOCTYPE html>
    <html>
    <head>
        <title>mgsformvalidation</title>
        <script src="https://cdn.jsdelivr.net/npm/mgsformvalidation@1.0.0/dist/mgsformvalidation.min.js"></script>
    </head>
    <body>
        <!--  write a class, id and and attribute are same as "class="name" id="name" name="name""-->
        <form metho="post" action="javascript:void(0)" id="myForm" enctype="multipart/form-data">
            <div class="form-group col-md-4">
                <label for="name" class="text-heading">Name</label>
                <input type="text" class="form-control name" id="name" placeholder="Name" name="name">
            </div>
            <div class="form-group col-md-4">
                <label for="email" class="text-heading">Email</label>
                <input type="email" class="form-control email" id="email" placeholder="Email" name="email">
            </div> 
            <div class="form-group col-md-4">
                <label for="mobile" class="text-heading">Mobile</label>
                <input type="text" class="form-control mobile" id="mobile" placeholder="mobile" name="mobile">
            </div>  
            <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary"> Submit</button>
            </div>
        </form>

        <script>
            let allfields = ('.name,.email,.mobile');
            mgsKeyupChange(allfields); // always all first then call other functuin -
            mgsOnlyNumber('#phone');
            mgsValidateEmail('.email, .emails');

            document.querySelector('#form_submit').addEventListener('submit', function (e) {
                var form_data = new FormData(this);
                if (mgsFormValidate(allfields)) {
                    e.preventDefault();
                    msgSubmitData({
                        url:'http://localhost/mgs/user-add',    // API endpoint
                        returnUrl:'http://localhost/mgs/user',  // Redirect URL after success
                        formId:'$myForm',   // Form selector
                        formData:{}    // FormData object,
                        methodType: 'post' // Optional, default is post
                    });
                }
            });
        </script>
    </body>
    </html>
```


## 📦 Installation via NPM

```bash
npm install mgsdatatable

```
## after installation then use it-

## Example Usage (ES Module) -
```
    <!DOCTYPE html>
    <html>
    <head>
        <title>mgsformvalidation</title>
    </head>
    <body>
        <!--  write a class, id and and attribute are same as "class="name" id="name" name="name""-->
        <form metho="post" action="javascript:void(0)" id="myForm" enctype="multipart/form-data">
            <div class="form-group col-md-4">
                <label for="name" class="text-heading">Name</label>
                <input type="text" class="form-control name" id="name" placeholder="Name" name="name">
            </div>
            <div class="form-group col-md-4">
                <label for="email" class="text-heading">Email</label>
                <input type="email" class="form-control email" id="email" placeholder="Email" name="email">
            </div> 
            <div class="form-group col-md-4">
                <label for="mobile" class="text-heading">Mobile</label>
                <input type="text" class="form-control mobile" id="mobile" placeholder="mobile" name="mobile">
            </div>  
            <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary"> Submit</button>
            </div>
        </form>

        <script type="module">
            import {mgsOnlyNumber, mgsValidateEmail, mgsFormValidate, msgSubmitData} from 'mgsformvalidation';

            <script>
            let allfields = ('.name,.email,.mobile,.image');
            mgsKeyupChange(allfields); // always all first then call other functuin -
            mgsOnlyNumber('#phone');
            mgsValidateEmail('.email, .emails');

            document.querySelector('#form_submit').addEventListener('submit', function (e) {
                var form_data = new FormData(this);
                if (mgsFormValidate(allfields)) {
                    e.preventDefault();
                    msgSubmitData({
                        url:'http://localhost/mgs/user-add',    // API endpoint
                        returnUrl:'http://localhost/mgs/user',  // Redirect URL after success
                        formId:'$myForm',   // Form selector
                        formData:{}    // FormData object,
                        methodType: 'post' // Optional, default is post
                    });
                }
            });
        </script>
        </script>
    </body>
    </html>
```