function abrirMenu(){
    document.getElementById("menu").style.display = "block"
    document.getElementById("BTN_fecharMenu").style.display = "block"
    document.getElementById("BTN_abrirMenu").style.display = "none"
    document.getElementById("body").style.overflow = "hidden"
}

function fecharMenu(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("BTN_fecharMenu").style.display = "none"
    document.getElementById("BTN_abrirMenu").style.display = "block"
    document.getElementById("body").style.overflow = "auto"
}

var projetoAtivo = 'casco'

function verProjeto(titulo){
    trocarProjeto()
    document.getElementById('casco').style.display = 'none'
    projetoAtivo = titulo
    document.getElementById(titulo).style.display = "flex"
}


function trocarProjeto(){
    document.getElementById(projetoAtivo).style.display = "none"
}

