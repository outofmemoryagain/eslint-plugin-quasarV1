# Report any obsolete plugin name changes. (misc-q-name-changes)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

lang: this.$q.i18n.isoName

this.$q.icons.set(Quasar.iconSet.fontawesomeV5)

```

Examples of **correct** code for this rule:

```js

lang: this.$q.lang.isoName

this.$q.iconSet.set(Quasar.iconSet.fontawesomeV5)

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

https://v1.quasar-framework.org/start/upgrade-guide#Misc
