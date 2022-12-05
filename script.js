let items = [];

document.querySelector('#ajouter').addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('produit');
    newDiv.innerHTML = `<p>${document.querySelector('#item').value}</p><img class="editer" src="img/edit.png" alt=""><img class="supprimer" src="img/bouton-moins.png" alt=""></img>`

    document.querySelector('.list').appendChild(newDiv);

    items.push(document.querySelector('#item').value);

    localStorage.setItem('list', JSON.stringify(items))

    document.querySelectorAll('p').forEach(element => {
        element.addEventListener('focusout', event => {
            event.target.contentEditable = false;
        })
    })
});

window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {

        let newDiv = document.createElement('div');
        newDiv.classList.add('produit');
        newDiv.innerHTML = `<p>${document.querySelector('#item').value}</p><img class="editer" src="img/edit.png" alt=""><img class="supprimer" src="img/bouton-moins.png" alt=""></img>`
        
        document.querySelector('.list').appendChild(newDiv);


        items.push(document.querySelector('#item').value);


        localStorage.setItem('list', JSON.stringify(items))
        document.querySelector('#item').value = '';
    }
})

let local = JSON.parse(localStorage.getItem('list'));

local.forEach(elt => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('produit');
    newDiv.innerHTML = `<p>${elt}</p><img class="editer" src="img/edit.png" alt=""><img class="supprimer" src="img/bouton-moins.png" alt=""></img>`
    
    items.push(elt)

    document.querySelector('.list').appendChild(newDiv);
})



document.querySelector('.list').addEventListener("click", event => {

    if (event.target.classList.contains("editer")) {
        event.target.previousSibling.contentEditable = true;
        // event.target.previousSibling.style.backgroundColor = "#dddbdb";
        event.target.previousSibling.focus();
        // let valider = document.createElement('button')
        // valider.classList.add('bouton2')
        // valider.innerText  = 'valider'
        // document.querySelector('.list').appendChild(valider);
        let test = document.querySelectorAll('p');
        let items = [];
        test.forEach(element => {
            items.push(element.innerText)
        })
        localStorage.setItem('list',JSON.stringify(items))
        // document.querySelector('.bouton2').addEventListener('click', ()=>{
        //     event.target.contentEditable = false;
        //     document.querySelector('.bouton2').remove();
        //     // event.target.previousSibling.style.backgroundColor = "#fff";
        //     let test = document.querySelectorAll('p');
        //     let items = [];
        //     test.forEach(element => {
            
        //         items.push(element.innerText)
        //     })
        //     localStorage.setItem('list',JSON.stringify(items))
        // })
    }
})

document.querySelector('.list').addEventListener("click", event => {
    if (event.target.classList.contains("supprimer")) {
        event.target.parentElement.remove();
        let test = document.querySelectorAll('p');
        let items = [];
        test.forEach(element => {
        
            items.push(element.innerText)
        })
        localStorage.setItem('list',JSON.stringify(items))
    }
})

document.querySelectorAll('p').forEach(element => {
    element.addEventListener('focusout', event => {
        event.target.contentEditable = false;
        let test = document.querySelectorAll('p');
        let items = [];
        test.forEach(element => {
        
            items.push(element.innerText)
        })
        localStorage.setItem('list',JSON.stringify(items))
    })
})


