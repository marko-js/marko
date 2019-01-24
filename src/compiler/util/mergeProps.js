const Node = require("../ast/Node");

module.exports = function merge(props1, props2, context) {
    if (props1 && !(props1 instanceof Node)) {
        props1 = context.builder.objectExpression(props1);
    }

    if (props2) {
        if (!(props2 instanceof Node)) {
            props2 = context.builder.objectExpression(props2);
        }
    } else {
        return props1;
    }

    if (props2.type === "ObjectExpression" && !props2.hasProperties()) {
        return props1;
    }

    if (props1.type === "ObjectExpression") {
        let argProp = props1.getProperty("_arg");

        if (argProp) {
            let mergeVar = context.helper("merge");
            argProp.value = context.builder.functionCall(mergeVar, [
                props2, // Input props from the attributes take precedence
                argProp.value
            ]);

            return props1;
        }

        if (props2.type === "ObjectExpression") {
            props1.addProperties(props2.properties);
            return props1;
        } else {
            let mergeVar = context.helper("merge");

            return context.builder.functionCall(mergeVar, [
                props2, // Input props from the attributes take precedence
                props1
            ]);
        }
    } else {
        let mergeVar = context.helper("merge");
        return context.builder.functionCall(mergeVar, [
            props2, // Input props from the attributes take precedence
            props1
        ]);
    }
};
