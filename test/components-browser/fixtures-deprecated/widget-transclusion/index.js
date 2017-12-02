module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),

    getInitialState: function (input) {
        var alertType = input.alertType || 'success';
        var alertMessage = input.alertMessage || 'Hello World!';

        return {
            alertType: alertType,
            alertMessage: alertMessage
        };
    },

    getTemplateData: function (state, input) {
        var alertType = state.alertType;
        var alertMessage = state.alertMessage;

        return {
            alertType: alertType,
            alertMessage: alertMessage
        };
    },

    setAlertType: function (newAlertType) {
        this.setState('alertType', newAlertType);
    },

    setAlertMessage: function (newAlertMessage) {
        this.setState('alertMessage', newAlertMessage);
    }
});