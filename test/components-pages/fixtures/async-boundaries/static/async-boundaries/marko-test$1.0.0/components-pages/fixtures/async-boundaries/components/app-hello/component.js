$_mod.def("/marko-test$1.0.0/components-pages/fixtures/async-boundaries/components/app-hello/component", function(require, exports, module, __filename, __dirname) { module.exports = {
    onInput: function(input) {
        this.name = input.name;
    },

    onMount: function() {
        this.type = 'app-hello';
    }
};
});