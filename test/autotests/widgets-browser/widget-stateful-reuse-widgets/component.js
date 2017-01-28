module.exports = {
    onInput: function(input) {
        this.state = {
            buttonSize: input.buttonSize || 'normal'
        };
    },

    setButtonSize: function(size) {
        this.setState('buttonSize', size);
    },
    onMount: function() {
    }
};