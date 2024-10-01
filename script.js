"use strict";
const btn = document.querySelector("#button");
// const buttonRemover =
//   document.querySelector<HTMLButtonElement>(".button-remover");
const input = document.getElementById("input");
function handleInput(event) {
    console.dir(Event);
    const elment = event.target;
    const contanier = document.querySelector(".contanier");
    const p = contanier === null || contanier === void 0 ? void 0 : contanier.children[1];
    if (elment instanceof HTMLInputElement && contanier && p) {
        console.log(elment.value.length);
        if (elment.value.length > 10 && p) {
            p.classList.add("active");
            p.innerHTML = "limite atigindo";
        }
        else {
            p.classList.remove("active");
            p.innerHTML = "";
        }
    }
}
function removerElement(elemento, event) {
    const li = elemento.previousElementSibling;
    const ul = document.querySelector("ul");
    if (li && ul && input instanceof HTMLInputElement) {
        ul.removeChild(li);
        ul.removeChild(elemento);
        const lista = Array.from(ul.children);
        const lis = lista.filter((elemento) => {
            if (elemento instanceof HTMLLIElement) {
                return elemento;
            }
        });
        lis.map((li, key) => {
            li.innerHTML += `${key + 1}:`;
        });
    }
}
if (input instanceof HTMLInputElement) {
    input.addEventListener("keyup", handleInput);
}
function handleClick(event) {
    const elemento = event.target;
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const button = document.createElement("button");
    if (input instanceof HTMLInputElement && ul && input.value.length !== 0) {
        button.setAttribute("onclick", "removerElement(this)");
        const lista = Array.from(ul.children);
        const qntd = lista.filter((elemenetoo) => {
            if (elemenetoo instanceof HTMLLIElement) {
                return elemenetoo;
            }
        });
        li.innerHTML = `${lista.length <= 0 ? 1 : qntd.length + 1} : ${input.value}`;
        button.classList.add("btnblue");
        button.innerText = "remover";
        button.classList.add("button-remover");
        ul.appendChild(li);
        ul.appendChild(button);
    }
    else {
        alert("não aceita campo vazio");
    }
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
// buttonRemover?.addEventListener("click", removerElement);
