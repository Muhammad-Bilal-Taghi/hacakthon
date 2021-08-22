let register = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('passcode').value
    // console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}


let login = () => {
    var email = document.getElementById('emails').value
    var password = document.getElementById('passcodes').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}  


