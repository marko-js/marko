"use strict";

var Node = require("./Node");

class ObjectExpression extends Node {
    constructor(def) {
        super("ObjectExpression");
        this.properties = def.properties;
    }

    generateCode(codegen) {
        this.properties = codegen.generateCode(this.properties);
        return this;
    }

    writeCode(writer) {
        var properties = this.properties;

        if (!properties || !properties.length) {
            writer.write("{}");
            return;
        }

        writer.incIndent();
        writer.write("{\n");
        writer.incIndent();

        properties.forEach((prop, i) => {
            writer.writeLineIndent();
            writer.write(prop);

            if (i < properties.length - 1) {
                writer.write(",\n");
            } else {
                writer.write("\n");
            }
        });

        writer.decIndent();
        writer.writeLineIndent();
        writer.write("}");
        writer.decIndent();
    }

    getProperty(name) {
        var properties = this.properties;

        for (var i = 0; i < properties.length; i++) {
            var curProperty = properties[i];
            if (curProperty.literalKeyValue === name) {
                return curProperty;
            }
        }
        return undefined;
    }

    addProperties(props) {
        if (props instanceof ObjectExpression) {
            props = props.properties;
        }

        if (Array.isArray(props)) {
            props.forEach(prop => {
                this.addProperty(prop);
            });
        }
    }

    addProperty(property) {
        var literalKeyValue = property.literalKeyValue;
        var properties = this.properties;

        if (literalKeyValue) {
            for (var i = 0; i < properties.length; i++) {
                var curProperty = properties[i];

                if (curProperty.literalKeyValue === literalKeyValue) {
                    properties[i] = property;
                    return;
                }
            }
        }

        properties.push(property);
    }

    hasProperties() {
        return this.properties != null && this.properties.length > 0;
    }

    toJSON() {
        return {
            type: "ObjectExpression",
            properties: this.properties
        };
    }

    walk(walker) {
        this.properties = walker.walk(this.properties);
    }

    toString() {
        var properties = this.properties;

        if (!properties || !properties.length) {
            return "{}";
        }

        let result = "{";

        properties.forEach((prop, i) => {
            if (i !== 0) {
                result += ", ";
            }
            result += prop;
        });

        return result + "}";
    }
}

module.exports = ObjectExpression;
