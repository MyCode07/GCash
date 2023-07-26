import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "+(99) 999 9999 999",
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('input[name="phone"]'); 