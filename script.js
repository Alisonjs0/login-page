let registerName, registerUser, registerPassword, registerConfirmPassword, email, loginUser, loginPassword
const lvisible = document.getElementById('loginPage')
const rvisible = document.getElementById('registerPage')
/* Register*/

    function register() {     
        registerName = document.getElementById('fullname').value
        registerUser = document.getElementById('user').value
        registerPassword = document.getElementById('password').value
        registerConfirmPassword = document.getElementById('password2').value
        email = document.getElementById('email').value

        switch (true) {
            case registerName == '':
                alert('Por favor, digite seu nome.')
                break
            case registerUser == '':
                alert('Por favor, digite seu usuario.')
                break
            case registerPassword == '':
                alert('Por favor, digite sua senha.')
                break
            case registerPassword.length < 8:
                alert('A senha precisa de no minimo 8 caracteres')
                break
            case registerConfirmPassword == '':
                alert('Por favor, confirme sua senha.')
                break
            case registerConfirmPassword != registerPassword:
                alert('As senhas não coincidem.')
                break
            case email == '':
                alert('Por favor, digite seu email.')
                break
            default:
                alert('Cadastrado com sucesso')
                lvisible.classList.add('login-visible')
                lvisible.classList.remove('login')
                rvisible.classList.add('rinvisible')
        }
        
    }
    function login() {
        loginUser = document.getElementById('userlogin').value 
        loginPassword = document.getElementById('passwordlogin').value

        switch (true) {
            case loginUser == '':
                alert('Digite um usuario cadastrado')
                break
            case registerUser != loginUser:
                alert('Usuario nn foi encontrado')
                break
            case registerPassword != loginPassword:
                alert('Senha incorreta')
                break
            default:
                alert('Conseguiu logar')
        }
    }

