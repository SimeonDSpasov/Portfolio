// template template_3eyke34
// service service_wmof80q
// MGmFcGgDMrEXYvJ2M
let contrastToggle = false;
function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    
    emailjs.sendForm(
        'service_wmof80q',
        'template_3eyke34',
        event.target,
        'MGmFcGgDMrEXYvJ2M'
    ).then(() => {
        
        loading.classList.remove("modal__overlay--visible");
        success.classList += ' modal__overlay--visible';
        console.log('email sent')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("Email services are unavailable at the moment. Please contact me directly @TheGamefan36@gmail.com")
    })
    
    loading.classList += " modal__overlay--visible";
    setTimeout(() => {
   
        console.log('email sent')
    }, 1000);
}
let isModalOpen = false;
function toggleModal() {

    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
        
    }
    isModalOpen = true;
    document.body.classList += " modal__open";
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme");
    }
    
}



  
 