// test/migrate/fixtures/widget-get-template-data/index.js

module.exports = {
    getTemplateData(state, input) {
        return {
            x: input.x,
            y: state.y
        };
    }
};
