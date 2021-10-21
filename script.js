const form = document.getElementById("myForm")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
    const formData = new FormData(form)

    const username = formData.get('usernameTxt')
    const email = formData.get('emailTxt')
    const gender = formData.get('gender')
    const address = formData.get('addressTxt')
    const city = formData.get('cityTxt')
    const agree = formData.get('agree')
    let error = []

    // VALIDATION
    if(!username){
        error.push("Username cannot be empty!")
    }

    if(username.length < 5 || username.length > 50){
        error.push("Username must be between 5 & 50!")
    }

    if(!email.endsWith("@gmail.com")){
        error.push("Email must end with @gmail.com")
    }
    
    if(!gender){
        error.push("Gender cannot be empty!")
    }

    if(!address){
        error.push("Address cannot be empty!")
    }

    if(!city){
        error.push("City cannot be empty!")
    }

    if(!agree){
        error.push("Agree cannot be empty!")
    }


    //ERROR MESSAGE
    if(error.length > 0){
        alert(error.join("\n"))
        errorMessage.innerHTML = error.join("</br")
        e.preventDefault()
     }else{
         if(!confirm("are you sure?" )){
             e.preventDefault()
         }
     }
}

form.addEventListener('submit', handleSubmit)