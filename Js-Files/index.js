var bg_color = document.querySelector('html');
function ToggleColor(){
    var temp = bg_color.getAttribute('data-bs-theme');
    if(temp == 'dark'){
        bg_color.setAttribute('data-bs-theme' ,'white');
    }
    else{
        bg_color.setAttribute('data-bs-theme' ,'dark')
    }
}



