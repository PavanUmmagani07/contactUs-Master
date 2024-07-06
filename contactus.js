let formData={
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:''
}

let submitStatusEl = document.getElementById('submitStatus')

let contactUsFormEl = document.getElementById("contactUsForm");
contactUsFormEl.addEventListener('submit', function(event){
    event.preventDefault();
    submitFormData(formData);
})

let firstNameEl = document.getElementById('firstName');
let firstNameErrorMsgEl = document.getElementById('firstNameErrorMsg')
firstNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        firstNameErrorMsgEl.textContent = '*Required'
        firstNameErrorMsgEl.style.color = 'red';
    }else{
        firstNameErrorMsgEl.textContent = '';
    }
    formData.firstName = event.target.value;
})

let lastNameEl = document.getElementById('lastName');
let lastNameErrorMsgEl = document.getElementById('lastNameErrorMsg')
lastNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        lastNameErrorMsgEl.textContent = '*Required'
        lastNameErrorMsgEl.style.color = 'red';
    }else{
        lastNameErrorMsgEl.textContent = '';
    }
    formData.lastName = event.target.value;
})

let eMailEl = document.getElementById('emailInput');
let emailErrorMsgEl = document.getElementById('emailErrorMsg')
eMailEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        emailErrorMsgEl.textContent = '*Required'
        emailErrorMsgEl.style.color = 'red';
    }else{
        emailErrorMsgEl.textContent = '';
    }
    formData.email = event.target.value;
})

let mobileNumberEl = document.getElementById('mobileNumber');
let mobileNumberErrorMsgEl = document.getElementById('mobileNumberErrorMsg')
lastNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        mobileNumberErrorMsgEl.textContent = '*Required'
        mobileNumberErrorMsgEl.style.color = 'red';
    }else{
        mobileNumberErrorMsgEl.textContent = '';
    }
    formData.mobileNumber = event.target.value;
})

let commentsEl = document.getElementById('comments');
let commentsErrorMsgEl = document.getElementById('commentsErrorMsg')
lastNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        commentsErrorMsgEl.textContent = '*Required'
        commentsErrorMsgEl.style.color = 'red';
    }else{
        commentsErrorMsgEl.textContent = '';
    }
    formData.mobileNumber = event.target.value;
})

let checkboxEl = document.getElementById('checkbox')
let checkboxErrorMsgEl = document.getElementById("checkboxErrorMsg")
function submitFormData(){
    if(checkboxEl.checked===true){
        let options={
            method:'POST',
            headers:{
                'Content-Type':'Application/json',
                Accept:'Application/json',
            },
            body:JSON.stringify(formData)
        }
        let url = 'http://localhost:3000/Contactus';
        fetch(url,options)
    
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData);
        })
    }
    else{
        checkboxErrorMsgEl.textContent = 'Tick the Checkbox and Other Feilds before SUbmitting';
        checkboxErrorMsgEl.style.color="Red"
    }
}




/*Locations*/
let northAmericaEl = document.getElementById('northAmerica');
let americaOfficesEl = document.getElementById('americaOffices')

let europeEl = document.getElementById('europe');
let europeOfficesEl = document.getElementById("europeOffices")

let asiaEl = document.getElementById('asia');
let asiaOfficesEl = document.getElementById("asiaOffices")

let middleEastEl = document.getElementById('middleEast');
let middleEastOfficesEl = document.getElementById("middleEastOffices")


europeEl.addEventListener('click',function(){
    if(europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.removeAttribute('hidden');
        europeEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

})



asiaEl.addEventListener('click',function(){
    if(asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.removeAttribute('hidden')
        asiaEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }
})

middleEastEl.addEventListener('click',function(){
    if(middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.removeAttribute('hidden')
        middleEastEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})

northAmericaEl.addEventListener('click',function(){
    if(americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.removeAttribute('hidden')
        northAmericaEl.classList.add('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})