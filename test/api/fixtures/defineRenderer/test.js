exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var defineRenderer = require("marko/defineRenderer");
    var renderer = defineRenderer({
        template: require("./template.marko"),
        getTemplateData: function(input) {
            return {
                fullName: input.firstName + " " + input.lastName
            };
        }
    });

    var renderResult = renderer.render({ firstName: "John", lastName: "Doe" });
    helpers.compare(renderResult.getOutput());
    done();
};
