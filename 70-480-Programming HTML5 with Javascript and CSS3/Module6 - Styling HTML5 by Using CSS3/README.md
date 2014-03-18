#Module6 - Styling with css

## Block Formatting

* block: Block boxes are formatted down the page one after another and respect padding, border, and margin values.
`display:block`
* inline: Inline layout blocks are formatted one after another based on the baseline of their text content until they break down onto another line, and so on. Inline blocks ignore height and width values.
`display:inline;`
*inline-block: Inline-block layout blocks are formatted one after another based on the baseline of their text content, but they keep their height and width values.
`display:inline-block;`
* table: Table layout enables you to identify blocks on the page as tables, rows, columns, and cells. Blocks are aligned by their edges rather than their content, and sized to fit the computed table.
`display:table;`
* flexbox: Flexbox layout is new in CSS3 and designed to be far more fluid than the others. You choose in which direction boxes are laid out and how boxes are sized, depending on how any excess whitespace around blocks should be handled.
```
display: flexbox;     // for a block-level flexbox container
display: -ms-flexbox;
display: inline-flexbox;   // for an inline flexbox container
display: -ms-inline-flexbox;
```
