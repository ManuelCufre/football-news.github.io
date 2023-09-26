const competiciones = document.getElementById('competiciones')
const fichajes = document.getElementById('fichajes')
const competicionesContenedor = document.getElementById('competiciones-contenedor')

function mostrarLigas(){
     competicionesContenedor.classList.add('visible')
}
function noMostrarLigas(){
     competicionesContenedor.classList.remove('visible')
}
