# Responsive Design

## @Medaia and Media
Tags that identify media types.  

### Media Types
Available Media types include:
* speech: Speech synthesizers.
* braille: Braille tactile feedback screen readers.
* embossed: Braille printers.
* handheld: Mobile devices (described as "small screen, monochrome, bitmapped graphics, limited bandwidth" in the HTML4 specification, dated 1999!).
* print: Print preview screens and printer output.
* projection: Projectors.
* screen: Computer screens.
* tty: Teletypes.
* tv: Televisions and other low-resolution devices with limited ability to scroll.
* all: Applicable to all devices.

### Media Characteristics for queries
* width, height: The width and height of the viewport (usually the browser window).
* device-width, device-height: The width and height of the active device screen (or paper, if printing).
* orientation: Whether the device is in portrait or landscape mode.
* resolution: The pixel density (in dpi or as a ratio) of the target device.
* aspect-ratio: The width to height ratio of the viewport.
* device-aspect-ratio: The width-to-height ratio of the device screen (or paper).
* color: The bits per color of the target display.
* color-index: The total number of colors the target device screen can show.
* monochrome: The bits per pixel in a monochrome frame buffer.
* scan: The scanning method of a TV. Possible values are progressive and interlace.
* grid: The display type of the output device: grid or bitmap.

### Media Print Common Rules
* Remove the page header, footer, navigation menus, background colors, CSS graphics, transforms, and animations
* Set the size of your fonts to values in points as you would for a Word document, set their color to dark grey, and remove any effects such text-shadow.
* Expand any links and abbreviations on the page so that the URL of the link or the expanded text of the abbreviation is printed to the right of the text
	```css
	a:after {
	  content: " (" attr(href) ")";
	}
	abbr:after {
	  content: " (" attr(title) ")";
	}
	```
* Lay out the content in one column, unless it includes an index or glossary, in which case two columns is acceptable
	```css
	article {
	  column-count : 1;
	}
	#glossary {
	  column-count : 2;
	}
	```
* Define the target size of the printed page, the margins around facing pages, and the minimum number of lines in a paragraph printed at the top (widows) and the bottom (orphans) of the page. You can use the @page rule to achieve this, as follows
	```css
	@page {
	   size: A4;
	   orphans: 3;
	   widows: 3;
	}
	```



All of these characteristics except scan and grid also allow you to query for minimum and maximum values as well. For example, you can specify min-width, max-width, min-resolution, max-resolution, and so on.

## Mobile first 
When using media queries, it is good practice to decide what all of your styles will be for either a large or a small viewport size, and then use media queries at the end of a page to override the primary styles for gradually decreasing or increasing sizes

Example
```css
/* Start with mobile styles - max width assumed at 480px*/
article {
  column-count: 1;
  line-height: 1.6;
  font-size: 12px;
  width: 98%;
}
@media (max-width: 600px) {
  .article {
    font-size: 14px;
    width: 90%;
  }
}
@media (max-width: 800px) {
  .article {
    column-count : 2;
    line-height: 1.5;
    width: 70%;
  }
}
/*note min-width here, not max-width*/
@media (min-width: 1200px) {
  .article {

    column-count : 3;
    width: 60%;
    font-size: 16px;
    line-height : 1.7;
  }
}
```

