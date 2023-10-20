
const form = document.querySelector("#loginform")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const submit = document.querySelector("#sbmt")
const CreateAccButton = document.querySelector(".createbtndesk")
const CreateAccbuttonmobile = document.querySelector(".createbutton")
const NameRegex = /^[a-z]+([- ][a-z]+)*$/
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const error = document.querySelector("#err")
const loginerror = document.querySelector("#error")
const ancor = document.querySelector(".ancor")
const phoneancor = document.querySelector(".forgot_password") 
ancor.style.display = "flex"
phoneancor.style.display = "flex"
const success = document.querySelector("#success")
const postbar = document.querySelector("#postbar")
const postbutton = document.querySelector("#postbtn")

success.style.display = "none"
loginerror.style.display = "flex"
error.style.display = "none"


const RegisterSubmit = document.createElement("input")
RegisterSubmit.type = "submit"
RegisterSubmit.value = "დარეგისტრირდი"
form.append(RegisterSubmit)
RegisterSubmit.style.display = "none"

const RegRePassword = document.createElement("input")
RegRePassword.type = "password"
RegRePassword.placeholder = "გაიმეორეთ პაროლი"
form.append(RegRePassword)
RegRePassword.style.display = "none"

const regPassword = document.createElement("input")
regPassword.type = "password"
regPassword.placeholder = "პაროლი"
form.append(regPassword)
regPassword.style.display = "none"


const regEmail = document.createElement("input")
regEmail.placeholder = "ელფოსტა ან ტელეფონის ნომერი"
form.append(regEmail)
regEmail.style.display ="none"


const lastname = document.createElement("input")
lastname.placeholder = "გვარი"
form.append(lastname)
lastname.style.display = "none"


const Name = document.createElement("input")
Name.placeholder = "სახელი"
form.append(Name)
Name.style.display = "none"


const usersJSON = localStorage.getItem('users');

const users = usersJSON ? JSON.parse(usersJSON) : [];





const LogedinUsersJson = localStorage.getItem("logged users")
const logedusers = LogedinUsersJson ? JSON.parse(LogedinUsersJson) : []






form.addEventListener("submit", (e) => {
  e.preventDefault()

  LoginFuntion()


  AddLoginInfoToLocalStorage()
} )




CreateAccbuttonmobile.addEventListener("click", () => {
  CreateInputs()

  loginerror.innerHTML = ""
  error.innerHTML = ""

})

CreateAccButton.addEventListener("click", () => {

  CreateInputs()
  loginerror.innerHTML = ""
  error.innerHTML = ""

})

function CreateInputs(){
  if(email.style.display !== "none"){
    RegisterSubmit.style.display = "flex"
    RegisterSubmit.style.justifyContent ="center"
    RegisterSubmit.style.backgroundColor = "#1877f2"
    RegisterSubmit.style.color = "white"
    RegisterSubmit.style.cursor = "pointer"
    RegisterSubmit.style.fontSize = "21px"
    RegisterSubmit.style.marginTop = "10px"
    CreateAccButton.innerHTML = "გაიარე ავტორიზაცია"
    email.style.display = "none"
    password.style.display = "none"
    form.style.display = "flex"
    form.style.flexDirection = "column-reverse"
    RegRePassword.style.display = 'flex'
    regPassword.style.display = "flex"
    regEmail.style.display = "flex"
    lastname.style.display = "flex"
    Name.style.display ="flex"
    submit.style.display = "none"
    error.style.display = "flex"
    loginerror.style.display = "none"
    ancor.style.display = "none"
    phoneancor.style.display = "none"
    success.style.display = "flex"




  } else{
    email.style.display = 'flex'
    RegisterSubmit.style.display = "none"
    password.style.display = "flex"
    CreateAccButton.innerHTML = "ახალი ანგარიშის შექმნა"
    form.style.flexDirection = "column"
    RegRePassword.style.display = "none"
    regPassword.style.display = "none"
    regEmail.style.display = "none"
    lastname.style.display = "none"
    Name.style.display = "none"
    submit.style.display = "flex"
    submit.style.justifyContent = "center"
    error.style.display = "none"
    loginerror.style.display = "flex"
    ancor.style.display = "flex"
    phoneancor.style.display = "flex"
    success.style.display = "none"



  
    

  }

}


RegisterSubmit.addEventListener("click", () => {


  validateInputs()
})






function validateInputs(){

  error.innerHTML = ""




  if(regEmail.value === "" || Name.value === "" || lastname.value === "" || regPassword.value === ""|| RegRePassword === ""){
    error.innerHTML = "Please fill the empty fields"
    return
  }

  if (!NameRegex.test(Name.value)) {
    error.innerHTML = "Please enter the right name";
    return;
  }
  if (!NameRegex.test(lastname.value)) {
    error.innerHTML = "Please enter the right name";
    return;
  }

  if(!EmailRegex.test(regEmail.value)){
    error.innerHTML = "Please enter a solid email"

    return
  }

  if(regPassword.value !== RegRePassword.value){
    error.innerHTML = "Please enter a solid password"

    return
  }

  if(regPassword.value.length <= 8){
    error.innerHTML = "Password must be at least 8 characters"

    return
  }else if(regPassword.value.length >= 22){
    error.innerHTML = "password must be less than 22 characters"

    return
  }

  users.forEach((el) => {
    if(regEmail.value === el.Email){
      error.innerHTML = "This email address is already in use"
      
      return
    }
  })




  if(error.innerHTML === ""){


   success.innerHTML = "Your Account has been created successfully"

   setInterval(() => {
    success.innerHTML = ""
   },1000)
    
    AddtoLocalstorage()


    Name.value = ""
    regEmail.value = ""
    lastname.value = ""
    RegRePassword.value = ""
    regPassword.value = ""

    setTimeout(() => {
      CreateAccButton.click()
    }, 500)
    return
    
  } 
  
  

}

function LoginFuntion(){

  loginerror.innerHTML = ""
  
  if(email.value == "" || password.value == ""){

    loginerror.innerHTML = "Please fill the empty fields"
    

    return
  }

  if(localStorage.users === undefined){
    loginerror.innerHTML = "Password or email is incorrect"
    return
  }
  users.forEach(el => {


    if(email.value == el.Email && password.value == el.Password){
      loginerror.innerHTML = ""
      window.location.href = "feed.html"

    } else if (email.value !== el.Email || password.value !== el.Password){
      loginerror.innerHTML = "Password or email is incorrect"

      return
    }

    
  });
};



function AddtoLocalstorage(){


  const NewUser = {
    Name: Name.value,
    LastName: lastname.value,
    Email: regEmail.value,
    Password: regPassword.value

  }

  users.push(NewUser)

  const updatedUsersJSON = JSON.stringify(users);

  localStorage.setItem('users', updatedUsersJSON);
  console.log(users);

}

function AddLoginInfoToLocalStorage(){
  const LoggedUser = {
    Email: email.value,
  }
  if(loginerror.innerHTML === ""){
    logedusers.push(LoggedUser)

  }

  const LogedinUsersJson = JSON.stringify(logedusers)
  localStorage.setItem("logged users", LogedinUsersJson)
}



