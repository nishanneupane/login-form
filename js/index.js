function check(){
    let a=document.getElementById('password').value;
    let b=document.getElementById('password1').value;

    if(a!=b){
       alert('password Does not match');
    }
    else{
        location.href="index.html";
    }
}