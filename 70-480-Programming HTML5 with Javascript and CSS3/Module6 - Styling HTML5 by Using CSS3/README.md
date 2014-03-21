#Module6 - Styling with css

### Outlines
	
* outline-width sets the width of the outline. Possible values are thin, medium (the default), and thick, or a specific measurement such as 2px or 1.5 rem.
* outline-style sets the line style of the outline. The most common values used are none, dotted, dashed, and solid.
* outline-color sets the color of the outline. Set it to any allowable color value, or invert (the default).
* outline-offset sets the distance between the outline and the border.

## Presentation

* The border-radius property enables you to set rounded corners on a box's border by defining the radius of the circle or radii of an ellipse around which the corner will bend.
```
border-radius: 2em;   // circular corners with radius 2em
border-radius: 5px/10px;   // elliptical corners with radii of 5px high and 10px wide
```
Note that border-radius is a shorthand property. You can set the radius of each of the four border corners individually by using the border-top-left-radius, border-top-right-radius, border-bottom-right-radius, and border-bottom-left-radius properties.

* The overflow-x and overflow-y properties enable you to set what happens when the content of an element is too wide or too high for the box that contains it. Possible values are:
* visible: The content is not clipped and is rendered outside of the box. This is the default.
* hidden: Only the content within the box is shown.
* scroll: Only the content within the box is shown, but a scrollbar is displayed so the rest of the content can be viewed.

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

## Link Attributes

Need to be in specified order:
Link - Las
Visted - Vegas
Hover - Hell's
Acitive - Angles

## Position 

absolute - 
fixed -
relative -
static -

