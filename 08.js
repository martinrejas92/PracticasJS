//*MANIPULACION DEL DOM

//console.dir(document)<= examina el documento general
// console.log(document.URL)
// console.log(document.title);//Vemos el titulo y lo cambiamos
// document.title = 'prueba';
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)


//*getElementById()

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById('main-header')

// headerTitle.textContent = 'Nuevo titulo';
// headerTitle.innerText = 'nuevo nuevo titulo';
// headerTitle.innerHTML = '<h3> Pueba</h3>'



//*getElementsByClassName()

// let items = document.getElementsByClassName('list-group-item');
// console.log(items[3])

// items[0].textContent = 'Prueba';
// console.log(items[0])

//*getElementsByTagName()

// var items = document.getElementsByTagName('li')
// items[2].textContent = 'prueba 02'


//*querySelector
//Entonces en este caso tenemos querySelector que me permite seleccionar el primer elemento de acuerdo a un parámetro que nosotros le vamos a indicar y ese parámetro especifica un grupo de selectores.


// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px yellow'

// let input = document.querySelector('input');
// input.style.background = 'yellow';
// input.value = 'hieeeeeee'

// let button = document.querySelector('input[type="submit"]');//<= yo lo hice con .btn  que es la clase y funciono
// button.style.backgroundColor = 'red';
// button.value = 'Enviaaaar'


// let item = document.querySelector('.list-group-item');
// item.style.color = 'blue';


//*querySelectorAll

// var items = document.querySelectorAll('.list-group-item')
// items[2].style.color = 'red';

// let titulos = document.querySelectorAll('.title');
// console.log(titulos)
// titulos[0].textContent = 'Prueba';

// let impar = document.querySelectorAll('li:nth-child(odd)')
// let par = document.querySelectorAll('li:nth-child(even)')
// for(var i=0; i < impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc';
//     par[i].style.backgroundColor = '#f4f4f4';
// }
 
//*ELEMENTOS PADRES
//* ParentNode 
// selecciona el elemento padre
// let itemList = document.querySelector('#items')
// console.log(itemList.parentNode);
// let main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';

// console.log(main.parentNode.parentNode)

//* ParentElement

// let itemList = document.querySelector('#items')
// console.log(itemList.parentElement);
// let main = itemList.parentElement;
// main.style.backgroundColor = '#f4f4f4';

// console.log(main.parentElement.parentElement)
//*ELEMENTOS HIJOS 
//*childNodes
// console.log(itemList.childNodes);

//*children
// console.log(itemList.children);

//*firstChild / firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Prueba'


//*lastChild / lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'prueba2'

//*ELEMENTOS HERMANOS

//previousSibling

// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//*CREAR ELEMENTOS Y NODOS DE TEXTO

//*createElement
//tagName

// var nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title', 'hola mundo');


// console.log(nuevoDiv)

// //*createTextNode

// var nuevoNodoText = document.createTextNode('hola world');
// nuevoDiv.appendChild(nuevoNodoText);

// console.log(nuevoDiv);

// let contenedor = document.querySelector('header .container')
// console.log(contenedor)

// var h1 = document.querySelector('h1');

// contenedor.insertBefore(nuevoDiv,h1)


//*AGREGAR EVENTOS
//EVENTO: eventos me refiero a escuchas que están dentro de ese sitio web a esperas de alguna acción por parte del usuario.


// document.getElementById('boton').addEventListener('click', function() {  
//     console.log('click 2')
// })

// document.getElementById('boton').addEventListener('click', hacerClick)

// function hacerClick(){
//     console.log('usted hizo click')
//     document.getElementById('header-title').textContent = 'Texto cambiado'
// }



//*ACTUALIZAR DISENOS 

//AGREGAR ELEMENTO A LA LISTA
let form = document.getElementById('formAgregar');
let lista = document.getElementById('items');
let filtro = document.getElementById('filtro');
//evento submit del formulario
form.addEventListener('submit', agregarItem)
//evento click de la lista
lista.addEventListener('click', eliminarItem);
//evento del teclado en el campo del filtro
filtro.addEventListener('keyup', filtrarItems)

//funcion para agregar un item a la lista
function agregarItem(e){
    e.preventDefault();
    let nuevoItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(nuevoItem));

    let botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel)
    // console.log(li)
    lista.appendChild(li)
  }

  //*funcion para eliminar elemento de la lista

  function eliminarItem(e){
      if(e.target.classList.contains('eliminar')){
          if(confirm('Seguro desea elimnar el elemnto?')){
            let li = e.target.parentElement;
            lista.removeChild(li);
          }

      }
  }


//*BUSCAR UN ELEMENTO DE LA LISTA
//funcion para filtrar elementos de la lista

function filtrarItems(e) {
    let texto = e.target.value.toLowerCase();//minusculas
    let items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto)!= -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    })

}
