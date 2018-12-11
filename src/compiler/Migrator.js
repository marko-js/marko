"use strict";

var createError = require("raptor-util/createError");

const FLAG_MIGRATOR_APPLIED = "migratorApply";

function migrateNode(node, context) {
    if (node.isDetached()) {
        return; //The node might have been removed from the tree
    }

    if (!(node.tagName || node.tagNameExpression)) {
        return;
    }

    context.taglibLookup.forEachTagMigrator(node, migration => {
        // Check to make sure a migration of a certain type is only applied once to a node
        if (node.isTransformerApplied(migration)) {
            return;
        }

        // Mark the node as have been transformed by the current migrator
        node.setTransformerApplied(migration);
        // Set the flag to indicate that a node was transformed
        context.setFlag(FLAG_MIGRATOR_APPLIED);
        context._currentNode = node;

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
    });
}

function migrateTreeHelper(node, context) {
    migrateNode(node, context);

    /*
     * Now process the child nodes by looping over the child nodes
     * and migrating the subtree recursively
     *
     * NOTE: The length of the childNodes array might change as the tree is being performed.
     *       The checks to prevent migrators from being applied multiple times makes
     *       sure that this is not a problem.
     */

    node.forEachChild(function(childNode) {
        migrateTreeHelper(childNode, context);
    });
}

function migrateTree(ast, context) {
    // TODO: Consider moving this into the loop below so that root level migrations
    // are also run on new nodes.
    context.taglibLookup.forEachTemplateMigrator(migration => {
        migration(ast, context);
    });

    /*
     * The tree is continuously migrated until we go through an entire pass where
     * there were no new nodes that needed to be migrated. This loop makes sure that
     * nodes added by migrators are also migrated.
     */
    do {
        context.clearFlag(FLAG_MIGRATOR_APPLIED);
        //Reset the flag to indicate that no migrations were yet applied to any of the nodes for this pass
        migrateTreeHelper(ast, context); //Run the migrations on the tree
    } while (context.isFlagSet(FLAG_MIGRATOR_APPLIED));
}

class Migrator {
    migrate(ast, context) {
        migrateTree(ast, context);
        return ast;
    }
}

module.exports = Migrator;
