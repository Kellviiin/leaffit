const perfil = document.querySelector('.logo');
perfil.addEventListener('mouseover', aparecer)
perfil.addEventListener('mouseout', desaparecer)
function aparecer(){
    const aside = document.querySelector('aside')
    aside.style.backgroundColor = '#7BC74D'   
}

function desaparecer(){
    const aside = document.querySelector('aside')
    aside.style.backgroundColor = 'transparent'   
}

function aparecer2(){
    const aside = document.querySelector('aside')
    aside.style.backgroundColor = '#7BC74D'   
}



