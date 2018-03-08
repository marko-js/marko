module.exports = [
    /* Mouse Events */
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    // 'mouseover',
    // 'mousemove',
    // 'mouseout',
    "dragstart",
    "drag",
    // 'dragenter',
    // 'dragleave',
    // 'dragover',
    "drop",
    "dragend",

    /* Keyboard Events */
    "keydown",
    "keypress",
    "keyup",

    /* Form Events */
    "select",
    "change",
    "submit",
    "reset",
    "input",

    "attach", // Pseudo event supported by Marko
    "detach" // Pseudo event supported by Marko

    // 'focus', <-- Does not bubble
    // 'blur', <-- Does not bubble
    // 'focusin', <-- Not supported in all browsers
    // 'focusout' <-- Not supported in all browsers
];
