const campoNome = document.querySelector("#nome")
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const campoRepitaSenha = document.querySelector("#repitaSenha")
const buttonSubmit = document.querySelector("#submit");

const errorMsgNome = document.querySelector(".msgNome");
const errorMsgEmail = document.querySelector(".msgEmail");
const errorMsgSenha = document.querySelector(".msgSenha1");


buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const nomeValue = campoNome.value;
    const emailValue = campoEmail.value;
    const senhaValue = campoSenha.value;
    const repitaSenhaValue = campoRepitaSenha.value;

    const nome = nomeValue === "" || nomeValue.length > 50;
    const email = emailValue === "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1;

    if(nome) {

        campoNome.style.border = "2px solid #DD1918"
        errorMsgNome.textContent = "Nome Inválido"
         errorMsgNome.classList = "errorNome";
         setTimeout(() => {
            errorMsgNome.textContent = "";
            errorMsgNome.classList = "";
            campoNome.style.border = "unset";
         },3000)
         return;

    } else if (email) {

        campoEmail.style.border = "2px solid #DD1918"
        errorMsgEmail.textContent = "Email Inválido"
         errorMsgEmail.classList = "errorEmail";
         setTimeout(() => {
            errorMsgEmail.textContent = "";
            errorMsgEmail.classList = "";
            campoEmail.style.border = "unset";
         },3000)
         return;

    } else if (senhaValue === "") {

        campoSenha.style.border = "2px solid #DD1918"
        setTimeout(()=>{
            campoSenha.style.border = "unset"
        }, 3000)

    }else if (repitaSenhaValue !== senhaValue){

        campoRepitaSenha.style.border = "2px solid #DD1918"
        errorMsgSenha.textContent = "As senhas não conferem"
         errorMsgSenha.classList = "errorSenha1";
         setTimeout(() => {
            errorMsgSenha.textContent = "";
            errorMsgSenha.classList = "";
            campoRepitaSenha.style.border = "unset"
         },3000)
         return;

    }else{
        alert("cadastro realizado com sucesso");
        window.location.href = "../login/index.html"
    }
    
});