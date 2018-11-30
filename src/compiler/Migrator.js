"use strict";

var printAst = require("marko-prettyprint");
var createError = require("raptor-util/createError");

function migrateNode(node, context) {
    if (node.isDetached()) {
        return; //The node might have been removed from the tree
    }

    const tagDef = node.tagDef;
    if (!tagDef) {
        return;
    }

    const migration = tagDef.getMigrator();
    if (!migration) {
        return;
    }

    try {
        migration(node, context);
    } catch (e) {
        throw createError(
            new Error(
                'Unable to migrate template at path "' +
                    context.filename +
                    '". Error: ' +
                    e.message
            ),
            e
        );
    }
}

function migrateTreeHelper(node, context) {
    migrateNode(node, context);

    /*
   * Now process the child nodes by looping over the child nodes
   * and migrating the subtree recursively
   *
   * NOTE: The length of the childNodes array might change as the tree is being performed.
   *       The checks to prevent migraters from being applied multiple times makes
   *       sure that this is not a problem.
   */
    node.forEachChild(function(childNode) {
        migrateTreeHelper(childNode, context);
    });
}

class Migrator {
    constructor(options) {
        this.parser = options.parser;
    }

    migrate(src, context) {
        const ast = this.parser.parse(src, context);
        context.taglibLookup.forEachTemplateMigrator(migration => {
            migration(ast, context);
        });
        migrateTreeHelper(ast, context);
        return printAst(ast);
    }
}

module.exports = Migrator;
