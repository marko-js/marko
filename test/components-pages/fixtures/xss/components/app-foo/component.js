module.exports = {
    onInput: function() {
        this.state = {
            evil: '</script><script>alert("hello")</script>'
        };

        this.evil = '</script><script>alert("hello")</script>';
    },

    onMount: function() {
        this.componentConfig = {
            evil: this.evil
        };
        window.fooComponent = this;
    }
};
