let display = document.querySelector('input');
let botoes = document.getElementsByTagName('button');
let pai = document.getElementById('app');

function ValorTela(){
    let display = document.querySelector('input');
    if(display.value.length>=3){
        alert('Insira um Número de até no Máximo 2 dígitos!');
        display.style.border="2px solid red";
        display.value=null;
    }
}

function Verificar(){
    if(display.value==1){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/abelha.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginTop="5%px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Abelha";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";



    }else if(display.value==2){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/bode.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Bode";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==3){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/canguru.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Canguru";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==4){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/elefante.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Elefante";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==5){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/furao.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Furão";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==6){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/girafa.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Girafa";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==7){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/hipopotamo.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Hipopotamo";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==8){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/iguana.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Iguana";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==9){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/jacare.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Jacaré";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==10){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/leao.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Leão";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==11){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/macaco.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Macaco";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==12){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/onca.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Onça";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==13){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/peixe.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Peixe";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==14){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/rato.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Rato";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==15){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/sapo.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Sapo";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==16){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/tigre.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Tigre";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==17){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/urso.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Urso";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==18){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/vaca.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Vaca";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else if(display.value==19){
        let imagem = document.getElementById('imagem');
        let img=document.createElement('img');
        img.src="../assets/img/zebra.jpg";
        img.id="animal";
        imagem.appendChild(img);
        img.style.width="100%";
        imagem.style.marginBottom="-200px";
        img.style.boxSizing="border-box";
        let texto=document.createElement('h3');
        texto.id="texto";
        texto.innerHTML="Zebra";
        imagem.appendChild(texto);
        display.style.border="2px solid green";
        display.style.color="green";
    }else{
        alert('Insira um número entre 1 e 19!!');
        display.value=null;
        display.style.border="2px solid red";
    }
}

function Limpar(){
    document.getElementById('animal').remove();
    document.getElementById('texto').remove();
    display.value="";
    display.style.border="none";
}


function Logar(){
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');

    if(usuario.value=="EmiliSouza"&&senha.value=="Eab424jg"){
        window.open("app/app.html","Toque-Bixo");
        usuario.value="";
        senha.value="";
    }else{
        alert('Insira seu Usuário e sua Senha!');
    }
}
function Clear(){
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');
    usuario.value="";
    senha.value="";
}

function Apostar(){
    let wind=window.confirm(`Confirmar Aposta no ${display.value}?`);
    if(wind==true){
        alert(`Você Apostou no ${display.value}`);
        display.value="";
    }else{
        document.getElementById('animal').remove();
        document.getElementById('texto').remove();
        display.style.border="none";
        alert('Aposta Cancelada!');
        display.value="";
    }
}

