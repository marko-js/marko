var app = require("./components/app");
app
    .renderSync({
        name: "Frank",
        colors: ["red", "green", "blue"]
    })
    .appendTo(document.body);
