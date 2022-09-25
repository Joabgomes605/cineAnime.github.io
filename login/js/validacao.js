const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");
const submitButton = document.querySelector("#submit-button");

const errorMsg = document.querySelector(".mensagem_de_erro");
const msgSucesso = document.querySelector(".sucesso");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const senhaValue = senhaInput.value;

    const email = emailValue === "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1;

    if(email || senhaValue === "") {
        errorMsg.textContent = "Usuário(a) ou senha inválido(a)"
        errorMsg.classList = "error";

        setTimeout(()=>{
            errorMsg.textContent = "";
            errorMsg.classList = "";
        },5000)

        return;
    } else{
        errorMsg.style.display = "none";
        msgSucesso.style.display = "flex";
        msgSucesso.textContent = "Logado com sucesso 😊";
        msgSucesso.classList = "mensagem_de_sucesso";
        alert("Olá! Bem vindo de volta.");
        setTimeout(()=>{
            window.location.href = "../homepage/index.html"
        },2000);
    }

})