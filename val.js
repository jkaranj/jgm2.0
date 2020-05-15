const form = document.getElementById("fillform")
// const namee = document.getElementById("name").value
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const namee = document.getElementById("name").value.trim()
    const mobile = document.getElementById("mob").value.trim()
    const email = document.getElementById("mail").value.trim()
    const message = document.getElementById("query").value.trim()
    const person = document.getElementById("dropdownMenu").value.trim()
    // check()
    console.log(namee)
    console.log(mobile)
    console.log(email)
    console.log(message)
    console.log(person)
    check(namee, mobile, email, message, person)
})

const check = (namee, mobile, email, message, person) =>{
    // const nameValue = n
    let regmob = /^[5-9][0-9]{9}$/
    let regmail = /^([a-zA-Z0-9\_.-]+)@([a-zA-Z]{2,250}).([a-z]{2,20})(.[a-z]{2,8})?$/

    if(namee === ''){
        document.getElementById("errmessage1").innerHTML = "**Name cant be empty"
        name.classList ='error'
        console.log("cant be empty")
    }
    else{
        document.getElementById("errmessage1").innerHTML = ""
        console.log("there is value");
    }

    if(mobile === ''){
        document.getElementById("errmessage2").innerHTML = "**mobile number cant be empty"
        console.log("cant be empty")
        mob.classList ='error'
    }
    else{
        if(regmob.test(mobile)){
        console.log("mobile number is valid");
        document.getElementById("errmessage2").innerHTML = ""
        mob.classList =''
        }
        else{
            document.getElementById("errmessage2").innerHTML = "**mobile numberis invalid"
            mail.classList ='error'
        }
    }

    if(email === ''){
        document.getElementById("errmessage3").innerHTML = "**email cant be empty"
        console.log("cant be empty")
        mail.classList ='error'
    }
    else{
        if(regmail.test(email)){
            console.log("email is valid");
            document.getElementById("errmessage3").innerHTML = ""
            mail.classList =''
        }
        else{
            document.getElementById("errmessage3").innerHTML = "**email should be like: abc@xyz.com"
            mail.classList ='error'
        }
    }

    if(message === ''){
        document.getElementById("errmessage4").innerHTML = "**Message cant be empty"
        console.log("cant be empty")
        query.classList ='error'
    }
    else{
        console.log("there is value");
        query.classList =''
    }

    if(person == 0){
        document.getElementById("errmessage5").innerHTML = "**select atleast one"
        console.log("cant be empty")
        dropdownMenu.classList ='error'
    }
    else{
        console.log("there is value");
        dropdownMenu.classList =''
    }
}