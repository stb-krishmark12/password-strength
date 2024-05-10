function check(){
    const passwordInput = document.getElementById('passwordInput');
    const weak = document.getElementById('weak');
    const medium = document.getElementById('medium');
    const strong = document.getElementById('strong');
    const message = document.getElementById('message');
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);
        updateProgressBar(strength);
    });

    function getPasswordStrength(password) {
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{4,}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;

        if (strongRegex.test(password)) {
            console.log("strong");
            return 'strong';
           
        } else if (mediumRegex.test(password)) {
            console.log("medium");
            return 'medium';

        } else {
            console.log("weak")
            return 'weak';
        }
    }

    function updateProgressBar(strength) {
        switch (strength) {
            case 'strong':
                strong.style.backgroundColor = 'green';
                medium.style.backgroundColor = 'yellow';
                weak.style.backgroundColor='red';
                message.innerHTML="STRONG";
                message.style.color='green';
                break;
            case 'medium':
                medium.style.backgroundColor = 'yellow';
                weak.style.backgroundColor='red';
                message.innerHTML="MEDIUM";
                message.style.color='green';
                
                strong.style.backgroundColor = 'rgb(114, 114, 114)';

                break;
            case 'weak':
               weak.style.backgroundColor = 'red';
                strong.style.backgroundColor = 'rgb(114, 114, 114)';
                medium.style.backgroundColor = 'rgb(114, 114, 114)';
                message.innerHTML="WEAK";
                message.style.color='red';
                break;
        }
    }
}





function showpass(){
   
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
