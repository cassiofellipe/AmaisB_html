const form = document.getElementById('form-confirm');

let formValid = false;

function numbervalid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const ValA = parseFloat(document.getElementById('valor-a').value);
    const ValB = parseFloat(document.getElementById('valor-b').value);
    const messagesucess = 'Formulario enviado com sucesso! Verificando: <b> O valor B é maior que o valor A </b>';
    
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);

    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
        
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})