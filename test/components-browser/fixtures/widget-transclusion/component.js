module.exports = {
    onInput: function (input) {
        var alertType = input.alertType || 'success';
        var alertMessage = input.alertMessage || 'Hello World!';

        this.state = {
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
};