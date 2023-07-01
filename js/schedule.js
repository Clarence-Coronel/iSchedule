let stepStatus = 0;
const back = document.querySelector('.btn-back');
const next = document.querySelector('.btn-next');
const forms = document.querySelectorAll('.form-part');
const progression = document.querySelectorAll('.progression__step');
const progressionTitle = document.querySelectorAll('.progression__title');
const logo = document.querySelector('.header__logo-container');
const mobileLabel = document.querySelector('.mobile-label');
const caseNo = document.querySelector('.caseNo-container');
const patientType = document.querySelector('#patientType');

logo.addEventListener('click', ()=>{
    window.location.href = './../index.html';
});

back.addEventListener('click', ()=>{
    if(stepStatus > 0) {
        progression[stepStatus].classList.remove('answered');
        progressionTitle[stepStatus].classList.remove('active');
        stepStatus--;
    }
    proceed();
});

next.addEventListener('click', ()=>{
    if(stepStatus < 3) stepStatus++;
    proceed();
});

function proceed(){
    forms.forEach((item)=>{
        item.style.display = 'none'
    });

    progression[stepStatus].classList.add('answered');

    if(stepStatus == 0 || stepStatus == 1) forms[stepStatus].style.display = 'grid';
    else forms[stepStatus].style.display = 'flex';
    progressionTitle[stepStatus].classList.add('active');

    if(stepStatus == 0) mobileLabel.innerHTML = 'Pumili ng Department';
    else if(stepStatus == 1){
        mobileLabel.innerHTML = 'Personal na Impormasyon';
        
        // alert('stepStatus 1');
    }
    else if(stepStatus == 2){
        mobileLabel.innerHTML = 'Schedule ng Appointment';
        next.value = 'Next'
        // alert('stepStatus 2');
    } 
    else if(stepStatus == 3){
        mobileLabel.innerHTML = 'Review ng Impormasyon';
        next.value = 'gawing showOTPModal() na yung function nitong button '
        // alert('stepStatus 3');
    }
}

function removeOTPModal(){

}

function showOTPModal(){

}

function getPatientType(type) {
    if(type == 'oldPatient'){
        caseOn = true;

        let temp = document.createElement('input');
        temp.setAttribute('type', 'text');
        temp.setAttribute('name', 'caseNo');
        temp.setAttribute('id', 'caseNo');
        temp.classList.add('caseNo');
        caseNo.appendChild(temp);

        caseNo.style.display = 'flex';

        // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
        // if(otherOn && !dummyOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(!otherOn && dummyOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }

        // if(dummyOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!dummyOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(!dummyOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(dummyOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }

        // if(caseOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!caseOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'none';
        //     dummyOn = false;
        // }
        // else if(!caseOn && !otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = true;
        // }
        // else if(caseOn && otherOn){
        //     document.querySelector('.dummyElement').style.display = 'flex';
        //     dummyOn = none;
        // }

        // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
        // caseOn = true;
        
    }
    else{
        try {

            // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
            document.getElementById('caseNo').remove();
            caseNo.style.display = 'none';

            // if(dummyOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(!dummyOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!dummyOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(dummyOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(caseOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!caseOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'none';
            //     dummyOn = false;
            // }
            // else if(!caseOn && !otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = true;
            // }
            // else if(caseOn && otherOn){
            //     document.querySelector('.dummyElement').style.display = 'flex';
            //     dummyOn = none;
            // }

            // Manipulates dummyElement depends if pantay or hindi yung num of columns sa .second
            // caseOn = false;

        } catch (error) {
            
        }  
    }
}

