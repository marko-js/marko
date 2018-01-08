module.exports = {
    onInput: function(input) {
        this.state = {
            'evil': '</script><script>alert("hello")</script>'
        };

        this.evil = '</script><script>alert("hello")</script>';
    },

    onMount: function(componentConfig) {
        this.componentConfig = {
            evil: this.evil
        };
        window.fooComponent = this;
    }
};