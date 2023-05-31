const image=document.querySelector('img'),
input=document.querySelector('input'),
button=document.querySelector('button'),
api=`https://api.qrserver.com/v1/`,
api2=`create-qr-code/?size=150x150&data=`;


const btn=document.getElementById('btn');
btn.addEventListener('click',function(){

var inp=document.getElementById('inp');
var an=inp.value;
var ans=an.trim();

if(ans==""){
    // console.log(ans);
    alert("Can not Generate QR-Code");
    return location.reload();
};

image.src=`${api}${api2}${input.value}`;





});
