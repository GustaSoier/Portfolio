//  aqui eu criei para a palavra "website" do sobre ficar escrevendo sozinho
var typingeffect = new Typed(".digitando", {
        strings: ["REALIDADE DIGITAL."],
        loop: true,
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 1500,
});

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

function enviarEmail() {
    let txtnome = document.getElementById("nome").value;
    let txtemail = document.getElementById("email").value;
    let txtnumero = document.getElementById("telefone").value;
 
    var params = {
        from_name: txtnome,
        from_email: txtemail,
        phone_number: txtnumero,
        message: "Olá, estou me contando para dizer que:" + document.getElementById("mensagem").value
      };
   
      let serviceID = "service_vpqvxpy";
      let templateID = "template_ngyl019";
        emailjs.send(serviceID, templateID, params).then(
          function (response) {
            console.log("E-mail enviado com sucesso!", response);
          },
          function (error) {
            console.error("Erro ao enviar o e-mail:", error);
          }
        );
}