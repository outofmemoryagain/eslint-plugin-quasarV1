/**
 * @fileoverview Report any obsolete plugin name changes.
 * @author Kerry Huguet
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/misc-q-name-changes"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("misc-q-name-changes", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "lang: this.$q.lang.isoName",
        "this.$q.iconSet.set(Quasar.iconSet.fontawesomeV5)"
    ],

    invalid: [
        {
            code: "lang: this.$q.i18n.isoName",
            output: "lang: this.$q.i18n.isoName",
            errors: ["$q.i18n is obsolete, use $q.lang instead."]
        },
        {
            code: "this.$q.icons.set(Quasar.iconSet.fontawesomeV5)",
            output: "this.$q.icons.set(Quasar.iconSet.fontawesomeV5)",
            errors: ["$q.icons is obsolete, use $q.iconSet instead."]
        }
    ]
});
