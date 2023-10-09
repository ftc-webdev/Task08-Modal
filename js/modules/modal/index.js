'use strict'

import { insertCSS } from "/js/modules/css.js"

let modal, overlay, closeModalBtn 


const insertModuleCSS = () => {
    const css = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #222;
        position: relative;
        min-height: 100vh;
    }

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.4rem;
        width: 450px;
        padding: 1.3rem;
        min-height: 250px;
        position: absolute;
        top: 20%;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 15px;
    }

    .modal .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modal input {
        padding: 0.7rem 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 0.9em;
    }

    .modal p {
        font-size: 0.9rem;
        color: #777;
        margin: 0.4rem 0 0.2rem;
    }

    button {
        cursor: pointer;
        border: none;
        font-weight: 600;
    }

    .btn {
        display: inline-block;
        padding: 0.8rem 1.4rem;
        font-weight: 700;
        background-color: black;
        color: white;
        border-radius: 5px;
        text-align: center;
        font-size: 1em;
    }

    .btn-open {
        position: absolute;
        bottom: 150px;
    }

    .btn-close {
        transform: translate(10px, -20px);
        padding: 0.5rem 0.7rem;
        background: #eee;
        border-radius: 50%;
    }
    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
        z-index: 1;
    }

    .modal {
        z-index: 2;
    }

    .hidden {
        display: none;
    }

    `

    insertCSS(css)
}


const insertHTML = (modalContainerId, contents) => {
    const html = `
        <section id="modal" class="modal hidden">
        <div class="flex">
        <button class="btn-close">⨉</button>
        </div>

            ${contents}

        </section>
    
    <div class="overlay hidden"></div>    
    
    `
    document.getElementById(modalContainerId).innerHTML = html
}

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};



const init = (containerId, contents) => {

    insertModuleCSS()
    insertHTML(containerId, contents)

    modal = document.querySelector("#modal");
    overlay = document.querySelector(".overlay");
    closeModalBtn = document.querySelector(".btn-close");

    closeModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closeModal();
        }
    });
    

}

export {
    init,
    openModal,
}


