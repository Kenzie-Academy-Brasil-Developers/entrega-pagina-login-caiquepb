function esqueceuSenha(){

    const body = document.querySelector('body')
    const senha = document.querySelector('.form__item--text')
    
    senha.addEventListener('click', () => {
        const modal = criarModal();
        body.appendChild(modal)
    })
    
}

esqueceuSenha()

function criarModal(){

    
    const section = document.createElement('section')
    section.classList.add('modal__container')

    const div1 = document.createElement('div')
    div1.classList.add('modal__box')
    section.appendChild(div1)

    const form = document.createElement('form')
    form.classList.add('modal__form')
    div1.appendChild(form)

    const img = document.createElement('img')
    img.classList.add('modal__img')
    img.src = "./src/img/x.svg"
    img.alt = "fechar"
    form.appendChild(img)
    img.addEventListener('click', () => {
        section.remove()
    })

    const h1 = document.createElement('h1')
    h1.classList.add('modal__title')
    h1.innerText = "Obter uma nova senha"
    form.appendChild(h1)

    const p = document.createElement('p')
    p.classList.add('modal__item')
    p.innerText = "Para obter uma nova senha, digite o e-mail cadastrado"
    form.appendChild(p)

    const div2 = document.createElement('div')
    div2.classList.add('modal__block')
    form.appendChild(div2)

    const label = document.createElement('label')
    label.classList.add('modal__label')
    label.htmlFor = "emailModal"
    label.innerText = "Email cadastrado "
    div2.appendChild(label)

    const span = document.createElement('span')
    span.classList.add('modal__span')
    span.innerText = "(Exemplo: aluno@kenzie.com.br)"
    label.appendChild(span)

    const input = document.createElement('input')
    input.classList.add('modal__input')
    input.name = "emailModal"
    input.id = "emailModal"
    input.type = "text"
    div2.appendChild(input)

    const button = document.createElement('button')
    button.classList.add('modal__button')
    button.type = "submit"
    button.id = "modalBtn"
    button.innerText = "Enviar"
    div2.appendChild(button)

    return section
    
}