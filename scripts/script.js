let nav = document.querySelector('.nav');

function openNav(){
    // alert('button clicked');
    if(nav.style.left == '-500px'){
       nav.style.left = '0px';
    }
    else{
        nav.style.left = '-500px';
    }
    
}

