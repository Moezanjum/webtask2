// import Swal from '/node_modules/sweetalert2/src/sweetalert2.js';

var fn = false;
var ln = false;
var em = false;
var no = false;
var name_format=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
var phno = /^[0]\d{10}$/;
var email_format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function vnf(field) {
    var vnf = field.value;
    if(vnf.match(name_format) && vnf.length > 0){
        fn = true;
        field.style.border = "1px solid green";
    }
    else{
        fn = false;
        field.style.border = "1px solid red";
    }
}

function vnl(field) {
    var vnl = field.value;
    if(name_format.test(vnl) && vnl.length > 0){
        ln = true;
        field.style.border = "1px solid green";
    }
    else{
        ln = false;
        field.style.border = "1px solid red";
    }
}

function vem(field) {
    var ve = field.value;
    if(email_format.test(ve) && ve.length > 0){ 
        em = true;
        field.style.border = "1px solid green";
    }
    else{
        em = false;
        field.style.border = "1px solid red";
    }
}

function vno(field) {
    var vno = field.value;
    if(phno.test(vno) && vno.length === 11){
        no = true;
        field.style.border = "1px solid green";
    }
    else{
        no = false;
        field.style.border = "1px solid red";
    }
}

// function submit(){
    
//     if (fn === true && ln === true && en === true && no === true) {
//         Swal.fire({
//             icon: 'success',
//             text: 'Form has been Succesfully Submitted, we will reach out to you soon',
//             title: 'Submission Sucessfull',
//             confirmButtonText: 'OK',
//           });
//     }

// }