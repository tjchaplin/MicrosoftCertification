# Module 1 - Overview HTML and CSS - Notes

##CSS 

###Cascading Rules

Three factors when applying styling rules
1. Importance. You can ensure a certain property is always applied to a set of elements by appending the rule with !important.
```css
h2 { font-weight : bold !important; }
```

2. Specificity. Style rules with the least specific selector are applied first, then those for the next specific, and so on until the style rules for the most specific selector are applied.
3. Source order. If styles rules exist for selectors of equal specificity, they are applied in the order given in the style sheet.

