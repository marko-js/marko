module.exports = {
    onInput: function () {
        this.string = 'world';
        this.number = 12;
        this.boolean = true;
        this.complex = {
            a: '<\"hello">',
            b: 'test'
        };
    },

    onMount: function () {
        this.name = 'app-component-config';
    }
};