document.getElementById('subhanallah-plus').addEventListener('click',function(){
   counterZikir('subhanallah');
});

document.getElementById('reset1').addEventListener('click',function(){
    reset('subhanallah');
});

document.getElementById('alhamdulillah-plus').addEventListener('click',function(){
    counterZikir('alhamdulillah');
});

document.getElementById('reset2').addEventListener('click',function(){
    reset('alhamdulillah');
});

document.getElementById('allahuakbar-plus').addEventListener('click',function(){
    counterZikir('allahuakbar');
});

document.getElementById('reset3').addEventListener('click',function(){
    reset('allahuakbar');
});

document.getElementById('resetall').addEventListener('click',function(){
    reset('allahuakbar');
    reset('alhamdulillah');
    reset('subhanallah');
});


