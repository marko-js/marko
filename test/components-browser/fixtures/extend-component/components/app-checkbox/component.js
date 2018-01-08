module.exports = {
    onInput: function (input) {
        this.state = {
            checked: input.checked === true,
            className: input['class'],
            data: input.data,
            body: input.label || input.renderBody
        };
    },

    isChecked: function () {
        return this.state.checked === true;
    },

    setChecked: function (newChecked) {
        if (newChecked !== this.state.checked) {
            this.setState('checked', !this.state.checked);
        }
    },

    toggle: function () {
        this.setChecked(!this.state.checked);
    },

    getData: function () {
        return this.state.data;
    },

    handleClick: function () {
        var newChecked = !this.state.checked;

        var defaultPrevented = false;

        this.emit('toggle', {
            checked: newChecked,
            data: this.state.data,
            preventDefault: function () {
                defaultPrevented = true;
            }
        });

        if (!defaultPrevented) {
            this.setState('checked', newChecked);
        }
    }
};