const comenzar = document.getElementById('comenzar')
const dia = document.getElementById('dia')
const crono = document.getElementById('crono')
const diaUno = document.getElementById('diaUno')
const diaDos = document.getElementById('diaDos')
const diaTres = document.getElementById('diaTres')
const lugarcito = document.getElementById('lugarcito')

const d22 = document.getElementById('22')
const d23 = document.getElementById('23')
const d24 = document.getElementById('24')

d22.addEventListener('click', dia1)
d23.addEventListener('click', dia2)
d24.addEventListener('click', dia3)

const comidas = document.getElementById('comidas')

let titulo = document.getElementById('titulo')
let foto = document.getElementById('foto')
let descripcion = document.getElementById('descripcion')
let maps = document.getElementById('maps')
let pregunta = document.getElementById('pregunta')

function iniciar() {
    dia.style.display = 'none'
    crono.style.display = 'none'
    comenzar.innerHTML = `
        <div class="imgInicio">
            <img src="./fotos/romita.jpg">
        </div>
        <div class="divBtnComenzar">
            <button class="colorBtn" id="btnComenzar">Comenzar</button>
        </div>
    `
    const btnComenzar = document.getElementById('btnComenzar')
    btnComenzar.addEventListener('click', seleccionarDias)
}

function seleccionarDias() {
    comenzar.style.display = 'none'
    dia.style.display = 'flex'
}

function dia1() {
    dia.style.display = 'none'
    crono.style.display = 'flex'
    diaUno.style.display = 'flex'
    diaDos.style.display = 'none'
    diaTres.style.display = 'none'
    lugarcito.style.display = 'none'
}

function dia2() {
    dia.style.display = 'none'
    crono.style.display = 'flex'
    diaUno.style.display = 'none'
    diaDos.style.display = 'flex'
    diaTres.style.display = 'none'
    lugarcito.style.display = 'none'
}

function dia3() {
    dia.style.display = 'none'
    crono.style.display = 'flex'
    diaUno.style.display = 'none'
    diaDos.style.display = 'none'
    diaTres.style.display = 'flex'
    lugarcito.style.display = 'none'
}

function dondeDU(lugar) {
    crono.style.display = 'none';
    lugarcito.style.display = 'flex';
    if (lugar == 1) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/vBor.png">
            </div>
        `
    } else if (lugar == 2) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/imp.png">
            </div>
        `
    } else if (lugar == 3) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/mBor.png">
            </div>
        `
    } else if (lugar == 4) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/ppp.png">
            </div>
        `
    } else if (lugar == 5) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/pEsp.png">
            </div>
        `
    } else if (lugar == 6) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/vdC.png">
            </div>
        `
    } else if (lugar == 7) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/di.png">
            </div>
        `
    } else if (lugar == 8) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/pan.png">
            </div>
        `
    } else if (lugar == 9) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/gio.png">
            </div>
        `
    } else if (lugar == 10) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/navo.png">
            </div>
        `
    } else if (lugar == 11) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/delle.png">
            </div>
        `
    } else if (lugar == 12) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/bas.png">
            </div>
        `
    } else if (lugar == 13) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/jar.png">
            </div>
        `
    } else if (lugar == 14) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/six.png">
            </div>
        `
    } else if (lugar == 15) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/piz.png">
            </div>
        `
    } else if (lugar == 16) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/sana.png">
            </div>
        `
    } else if (lugar == 17) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/col.png">
            </div>
        `
    } else if (lugar == 18) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/hil.png">
            </div>
        `
    } else if (lugar == 19) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/for.png">
            </div>
        `
    } else if (lugar == 20) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/tras.png">
            </div>
        `
    } else if (lugar == 21) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/mas.png">
            </div>
        `
    } else if (lugar == 22) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/no.png">
            </div>
        `
    } else if (lugar == 23) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/tra.png">
            </div>
        `
    } else if (lugar == 24) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/dis.png">
            </div>
        `
    } else if (lugar == 25) {
        lugarcito.innerHTML = `
            <div class="divLugarcito">
                <img class="imgLugarcito" src="./fotos/fel.png">
            </div>
        `
    }
}

window.addEventListener('load', iniciar)