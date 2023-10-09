'use strict'

import { init, openModal } from '/js/modules/modal/index.js'

document.addEventListener("DOMContentLoaded", () => {

    const html = `
        <div> Hello world</div> 
    `



    init("modalContainer", html)

    const openModalBtn = document.querySelector(".btn-open");
    openModalBtn.addEventListener("click", openModal);


})