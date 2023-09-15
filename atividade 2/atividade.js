function inverso(){
    const myJSON_nomes = '["Nome: Stranger Things","Plataforma: Netflix","Temporadas:04","é uma série de suspense e ficção científica que se passa nos anos 80. A trama começa quando um garoto chamado Will desaparece misteriosamente em uma pequena cidade. Enquanto seus amigos e família buscam por ele, eles descobrem um mundo de segredos sombrios, experimentos governamentais e forças sobrenaturais"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("serie").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p>"+array_nomes[3]+"</p>" +
    "<p><img id='img1' src='stranger.png' alt=''>"+"</p>"
    
}

function praia(){
    const myJSON_nomes = '["Nome: Outer Banks","Plataforma: Netflix","Temporadas:04","é uma série de aventura e drama que segue um grupo de jovens residentes dos Outer Banks, uma região costeira da Carolina do Norte.",""]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("serie").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p>"+array_nomes[3]+"</p>" +
    "<p><img id='img2' src='praia.jpg' alt=''>"+"</p>"
    
}


function verao(){
    const myJSON_nomes = '["Nome: O verão que mudou minha vida","Plataforma: Amazom Prime","Temporadas:02","conta a história de Isabel “Belly” Conklin, de 16 anos, enquanto ela passa os verões na fictícia cidade litorânea de Cousins ​​Beach com sua mãe, seu irmão mais velho e os filhos da melhor amiga de sua mãe"]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("serie").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p>"+array_nomes[3]+"</p>" +
    "<p><img id='img3' src='verao.jpg' alt=''>"+"</p>"
    
}

function escuro(){
    const myJSON_nomes = '["Nome: Wandinha","Plataforma: Netflix","Temporadas:01","é uma série de comédia que gira em torno da vida de Wandinha Addams, um membro excêntrico da família Addams conhecida por sua personalidade sombria e fascínio pelo macabro."]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("serie").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p>"+array_nomes[3]+"</p>" +
    "<p><img id='img4' src=escuro.jpg alt=''>"+"</p>"
    
}

function medico(){
    const myJSON_nomes = '["Nome: Greys Anatomy","Plataforma: Star Plus","Temporadas:19","é uma série médica e de drama que segue a vida pessoal e profissional de médicos, internos e residentes do Grey Sloan Memorial Hospital."]';
console.log(myJSON_nomes)

const array_nomes = JSON.parse(myJSON_nomes)
console.log(array_nomes)

document.getElementById("serie").innerHTML= 
    "<p>"+array_nomes[0]+"</p>"+
    "<p>"+array_nomes[1]+"</p>"+
    "<p>"+array_nomes[2]+"</p>"+
    "<p>"+array_nomes[3]+"</p>" +
    "<p><img id='img5' src='medico.png' alt=''>"+"</p>"
    
}