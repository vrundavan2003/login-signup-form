function change(){
    var x = document.getElementById('fname').value;
    var y = document.getElementById('lname').value;
    var q = document.getElementById('date').value;
    var r = document.getElementById('address').value;
    var w = document.getElementById('pass').value;
    var nameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validEmail = document.getElementById('email').value.match(nameRegex);
    var Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    var validPassword = document.getElementById('pass').value.match(Password);
    var validCPass = document.getElementById('cpass').value.match(w);
    var Number = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var validNumber = document.getElementById('mobile').value.match(Number);
    var today = new Date();
    today.setFullYear(2005);
    var birth = new Date(q);
    var validDate = birth < today;

    if(x != ""){
        document.getElementById("fnamealert").innerHTML = "";
        document.getElementById('fname').style.borderColor = '#ada8a8';
        document.getElementById('fname').style.borderWidth = '1px';
    }
    if(y != ""){
        document.getElementById("lnamealert").innerHTML = "";
        document.getElementById('lname').style.borderColor = '#ada8a8';
        document.getElementById('lname').style.borderWidth = '1px';
    }
    if(validEmail){
        document.getElementById("emailalert").innerHTML = "";
        document.getElementById('email').style.borderColor = '#ada8a8';
        document.getElementById('email').style.borderWidth = '1px';
    }
    if(validNumber){
        document.getElementById("mobilealert").innerHTML = "";
        document.getElementById('mobile').style.borderColor = '#ada8a8';
        document.getElementById('mobile').style.borderWidth = '1px';
    }
    if(validDate){
        document.getElementById("datealert").innerHTML = "";
        document.getElementById('date').style.borderColor = '#ada8a8';
        document.getElementById('date').style.borderWidth = '1px';
    }
    if(r != ""){
        document.getElementById("addressalert").innerHTML = "";
        document.getElementById('address').style.borderColor = '#ada8a8';
        document.getElementById('address').style.borderWidth = '1px';
    }
    if(validPassword){
        document.getElementById("passalert").innerHTML = "";
        document.getElementById('pass').style.borderColor = '#ada8a8';
        document.getElementById('pass').style.borderWidth = '1px';
    }
    if(validCPass){
        document.getElementById("cpassalert").innerHTML = "";
        document.getElementById('cpass').style.borderColor = '#ada8a8';
        document.getElementById('cpass').style.borderWidth = '1px';
    }
}


function validateForm(){
    var x = document.getElementById('fname').value;
    var y = document.getElementById('lname').value;
    var z = document.getElementById('email').value;
    var w = document.getElementById('pass').value;
    var p = document.getElementById('mobile').value;
    var q = document.getElementById('date').value;
    var r = document.getElementById('address').value;
    var nameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var validEmail = document.getElementById('email').value.match(nameRegex);
    var Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
    var validPassword = document.getElementById('pass').value.match(Password);
    var validCPass = document.getElementById('cpass').value.match(w);
    var Number = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var validNumber = document.getElementById('mobile').value.match(Number);
    var today = new Date();
    today.setFullYear(2005);
    var birth = new Date(q);
    var validDate = birth < today;

    if(x == ""){
        document.getElementById("fnamealert").innerHTML = "firstname should not be blank*";
        document.getElementById('fname').style.borderColor = 'red';
        document.getElementById('fname').style.borderWidth = '2px';
    }

    
    else if(y == ""){
        document.getElementById("lnamealert").innerHTML = "lastname should not be blank*";
        document.getElementById('lname').style.borderColor = 'red';
        document.getElementById('lname').style.borderWidth = '2px';
    }

    else if (!validEmail){
        if(z == ""){
            document.getElementById("emailalert").innerHTML = "email should not be blank*";
        }
        else{
            document.getElementById("emailalert").innerHTML = "email should be in valid form*";
        }
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.borderWidth = '2px';
    }

    else if (!validNumber){
        if (p == ""){
            document.getElementById("mobilealert").innerHTML = "mobile number should not be blank*";
        }
        else{
            document.getElementById("mobilealert").innerHTML = "mobile number should be in valid form*";
        }
        document.getElementById('mobile').style.borderColor = 'red';
        document.getElementById('mobile').style.borderWidth = '2px';
    }

    else if (!validDate){
        if (!isNaN(q)){
            document.getElementById("datealert").innerHTML = "birthdate should not be blank*";
        }
        else{
            document.getElementById("datealert").innerHTML = "birthdate should bevalid*";
        }
        document.getElementById('date').style.borderColor = 'red';
        document.getElementById('date').style.borderWidth = '2px';
    }

    else if(r == ""){
        document.getElementById("addressalert").innerHTML = "address should not be blank*";
        document.getElementById('address').style.borderColor = 'red';
        document.getElementById('address').style.borderWidth = '2px';
    }

    else if (!validPassword){
        var upper = /^(?=.*[A-Z]).{1,}$/ ;
        var small = /^(?=.*[a-z]).{1,}$/ ;
        var digit = /^(?=.*[0-9]).{1,}$/;
        var validupper = w.match(upper);
        var validsmall = w.match(small);
        var validdigit = w.match(digit);
        if(w == ""){
            document.getElementById("passalert").innerHTML = "password should not be blank*";
        }
        else if(w.length<8){
            document.getElementById("passalert").innerHTML = "password length should be greater then 8*";
        }
        else if(w.length>16){
            document.getElementById("passalert").innerHTML = "password length should be less then 16*";
        }
        else if(!validupper){
            document.getElementById("passalert").innerHTML = "password must have atleast one uppercase*";
        }
        else if(!validsmall){
            document.getElementById("passalert").innerHTML = "must have atleast one small character*";
        }
        else if(!validdigit){
            document.getElementById("passalert").innerHTML = "password must have atleast one digit*";
        }
        else{
            document.getElementById("passalert").innerHTML = "must have atleast one special character*";
        }
        document.getElementById('pass').style.borderColor = 'red';
        document.getElementById('pass').style.borderWidth = '2px';
    }

    else if(!validCPass){
        document.getElementById("cpassalert").innerHTML = "not match*";
        document.getElementById('cpass').style.borderColor = 'red';
        document.getElementById('cpass').style.borderWidth = '2px';
    }

    else{
        addNewData(x,y,z,w,p,q,r);
    }
}

function validateEditForm(){
    var x = document.getElementById('fname').value;
    var y = document.getElementById('lname').value;
    var z = document.getElementById('email').value;
    var p = document.getElementById('mobile').value;
    var q = document.getElementById('date').value;
    var r = document.getElementById('address').value;
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('params');
    decode = decodeURIComponent(myParam);
    const myArray = decode.split("&");
    var w = myArray[3].split('=')[1];
    var nameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validEmail = document.getElementById('email').value.match(nameRegex);
    var Number = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var validNumber = document.getElementById('mobile').value.match(Number);
    var today = new Date();
    today.setFullYear(2005);
    var birth = new Date(q);
    var validDate = birth < today;

    if(x == ""){
        document.getElementById("fnamealert").innerHTML = "firstname should not be blank*";
        document.getElementById('fname').style.borderColor = 'red';
        document.getElementById('fname').style.borderWidth = '2px';
    }

    
    else if(y == ""){
        document.getElementById("lnamealert").innerHTML = "lastname should not be blank*";
        document.getElementById('lname').style.borderColor = 'red';
        document.getElementById('lname').style.borderWidth = '2px';
    }

    else if (!validEmail){
        if(z == ""){
            document.getElementById("emailalert").innerHTML = "email should not be blank*";
        }
        else{
            document.getElementById("emailalert").innerHTML = "email should be in valid form*";
        }
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.borderWidth = '2px';
    }

    else if (!validNumber){
        if (p == ""){
            document.getElementById("mobilealert").innerHTML = "mobile number should not be blank*";
        }
        else{
            document.getElementById("mobilealert").innerHTML = "mobile number should be in valid form*";
        }
        document.getElementById('mobile').style.borderColor = 'red';
        document.getElementById('mobile').style.borderWidth = '2px';
    }

    else if (!validDate){
        if (!isNaN(q)){
            document.getElementById("datealert").innerHTML = "birthdate should not be blank*";
        }
        else{
            document.getElementById("datealert").innerHTML = "birthdate should bevalid*";
        }
        document.getElementById('date').style.borderColor = 'red';
        document.getElementById('date').style.borderWidth = '2px';
    }

    else if(r == ""){
        document.getElementById("addressalert").innerHTML = "address should not be blank*";
        document.getElementById('address').style.borderColor = 'red';
        document.getElementById('address').style.borderWidth = '2px';
    }

    else{
        addNewEditData(x,y,z,w,p,q,r);
    }
}

function addNewEditData(firstname,lastname,email,password,number,birthdate,address) {
    var formdata = JSON.parse(localStorage.getItem('formdata') || "[]");
    var form = {
        firstname : firstname,
        lastname :lastname,
        email :email,
        password : password,
        number : number,
        birthdate : birthdate,
        address : address
    };
    formdata.push(form);
    localStorage.setItem("formdata", JSON.stringify(formdata));
    var greet = [form];
    localStorage.setItem("greet",JSON.stringify(greet));
    window.location = "home.html";
};

function addNewData(firstname,lastname,email,password,number,birthdate,address) {
        var formdata = JSON.parse(localStorage.getItem('formdata') || "[]");
        var form = {
            firstname : firstname,
            lastname :lastname,
            email :email,
            password : password,
            number : number,
            birthdate : birthdate,
            address : address
        };
        if(formdata.length==0){
            formdata.push(form);
            localStorage.setItem("formdata", JSON.stringify(formdata));
            window.location = "login.html";
        }
        else{
            checkEmail();
        }
        function checkEmail(){
            if(formdata.length>0){

                const existData = formdata.filter((t) => t.email === form.email)
                
                if (existData.length > 0) {
                    alert("data already exist")
                } else {
                    formdata.push(form);
                    localStorage.setItem("formdata", JSON.stringify(formdata));
                    window.location = "login.html";
                }                          
            }
        }
};
function loginpage(){
    window.location = "login.html";
}

function validateLoginForm(){
    var formdata = JSON.parse(localStorage.getItem('formdata'));
    var mail = document.getElementById('email1').value;
    var pass = document.getElementById('pass1').value;
    const existData = formdata.filter((t) => t.email === mail)
    if (existData.length > 0) {
        if(existData[0].password == pass){
            localStorage.setItem('greet',JSON.stringify(existData));
            window.location = "home.html";
        }
        else{
            alert("password is incorrect");
        }
    }
    else{
        alert('email not exist');
    }
}
function signuppage(){
    window.location = "signup.html";
}

function back(){
    window.close();
    const myWindow = window.open("login.html");
        // setTimeout(function() {myWindow.close()}, 3000);
    // window.location = 'login.html';
}

function forgot(){
    document.getElementById('forgot1').style.display = 'none';
    document.getElementById('forgot2').style.display = 'none';
    document.getElementById('forgot3').style.display = 'none';
    document.getElementById('forgot5').style.display = 'block';
}

function forgotsubmit(){
    var formdata = JSON.parse(localStorage.getItem('formdata'));
    var mail = document.getElementById('email1').value;
    const existData = formdata.filter((t) => t.email === mail)
    if (existData.length > 0) {
        localStorage.setItem('greet',JSON.stringify(existData));
        document.getElementById('forgot').style.display = 'none';
        document.getElementById('forgot5').style.display = 'none';
        document.getElementById('forgot4').style.display = 'block';
        document.getElementById('forgot6').style.display = 'block';
    }
    else{
        alert('email not exist');
    }
}

function passreset(){
    var greet = JSON.parse(localStorage.getItem('greet'));
    var birthdate = greet[0].birthdate
    var date = document.getElementById('date').value;
    if(birthdate == date){
        alert('your password is'+ "  " +greet[0].password);
        window.location = "login.html";
    }
    else{
        alert("birthdate is incorrect");
    }
}

function edit(i){
                var formdata = JSON.parse(localStorage.getItem('formdata'));
                objectData = formdata[i];
                let queryString = ""
                for (let key in objectData) {
                    queryString += encodeURIComponent(key) + '='+ encodeURIComponent(objectData[key]) + '&';
                }
                queryString = queryString.substr(0, queryString.length - 1)
                var queryParams = new URLSearchParams(window.location.search);
                queryParams.set('params',queryString );
                var query = queryParams.toString(); 
                window.location.href = 'signup.html' + '?' +  query + i ;
}

function onedit(){
    document.getElementById('editarea').style.display = 'none';
    document.getElementById('editarea2').style.display = 'none';
    document.getElementById('editarea3').style.display = 'none';
    document.getElementById('editarea1').style.display = 'block';
}

function e(){
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('params');
        if (myParam != null){
            onedit();
            decode = decodeURIComponent(myParam);
            const myArray = decode.split("&");
            document.getElementById('fname').value = myArray[0].split('=')[1];
            document.getElementById('lname').value = myArray[1].split('=')[1];
            document.getElementById('email').value = myArray[2].split('=')[1];
            document.getElementById('mobile').value = myArray[4].split('=')[1];
            document.getElementById('date').value = myArray[5].split('=')[1];
            a = myArray[6].split('=')[1];
            addr = a.slice(0,-1);
            document.getElementById('address').value = addr;
            i =  myArray[6].slice(-1);
            var formdata = JSON.parse(localStorage.getItem('formdata'));
            formdata.splice(i,1);
            var temp = formdata;
            localStorage.removeItem('formdata');
            localStorage.setItem('formdata',JSON.stringify(temp));
        }
        else{
            document.getElementById('editarea').style.display = 'block';
            document.getElementById('editarea2').style.display = 'block';
            document.getElementById('editarea3').style.display = 'block';
            document.getElementById('editarea1').style.display = 'none';
        }
}

function dlt(i) {
    
    var formdata = JSON.parse(localStorage.getItem('formdata'));
    var greet = JSON.parse(localStorage.getItem('greet'));
    if(formdata[i].email == greet[0].email){
        formdata.splice(i,1);
        var temp = formdata;
        localStorage.removeItem('formdata');
        localStorage.setItem('formdata',JSON.stringify(temp));
        location.reload(true);
    }
    else{
        alert("you cant delete another person's data");
    }
}
