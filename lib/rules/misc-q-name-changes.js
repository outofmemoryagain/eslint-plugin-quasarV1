/**
 * @fileoverview Report any obsolete plugin name changes.
 * @author Kerry Huguet
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Report any obsolete misc $q name changes.",
            category: "Simple Name Change",
            recommended: true
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section
        function testQIdentifier(node, identifier, newIdentifier) {
            if (node.name === identifier) {
                var sourceCode = context.getSourceCode();
                var nodeSourceWithPrev = sourceCode.getText(node, 3);
                if(nodeSourceWithPrev === `$q.${identifier}`){
                    context.report({
                        node,
                        message: `$q.${identifier} is obsolete, use $q.${newIdentifier} instead.`,
                        fix: function(fixer) {
                            return fixer.replaceText(node, newIdentifier);
                        }
                    });
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Identifier(node) {
                testQIdentifier(node, "i18n", "lang")
                testQIdentifier(node, "icons", "iconSet")
            }
        };
    }
};
