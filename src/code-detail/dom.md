
##  减少 DOM 操作，减少重绘重排，尽量使用 CSS3 的 transform，requestAnimationFrame 等

重绘和重排是浏览器渲染页面的两个过程，重绘是指元素的外观发生变化，重排是指元素的位置发生变化。重绘和重排都会影响性能，因此需要尽量减少 DOM 操作。

引起重绘的属性：

- color
- background-color
- visibility
- border
- outline
- box-shadow
- text-decoration
- text-shadow
- opacity
- filter

引起重排的属性：

- width
- height
- padding
- margin
- border
- font-size
- font-weight
- font-family
- line-height
- text-align
- vertical-align
- display
- position
- float
- clear
- overflow

必须要更改相应的属性，可以使用 transform 来代替，因为 transform 不会引起重排。



