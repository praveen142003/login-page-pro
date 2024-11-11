$('#myRegform').validate({
    rules: {
        Fname: {
            required: true
        },

        password: {
            required: true
        }

    },
    messages: {
        password: {
            required: 'Enter Password'
        }
    }
})
   function local(){
    var username = document.getElementById('Fname').value
    var upassword = document.getElementById('Rpassword').value
    localStorage.setItem('regname',username)
    localStorage.setItem('rpass',upassword)
    window.location = 'loginpage.html'
   }




function validation(local) {

    if (myRegform.Rpassword.value !== myRegform.conpass.value) {
        alert('Password not match')
        return false
    }
    else {
        local()
        return true
    }
}

