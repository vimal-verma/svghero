# svghero: Javascript package for hero effect in SVG
[![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/za2fmp2khp1tn450c8yv.gif)](https://www.youtube.com/watch?v=n69Xqy9Q5kk)

Video links - https://www.youtube.com/watch?v=n69Xqy9Q5kk

you can get that effect by one line of code `svghero(id,title,text,width,height,x,y)`

### How to use this
- Copy and paste this code in body section of html.
  ```html
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svghero@0.1.0/example/style.css">
      <script src="https://cdn.jsdelivr.net/npm/svghero@0.1.0/cdn.js"></script>
  ```
- in `script` tag or in js file add `svghero(id,title,text,width,height,x,y)`
  where 
  - id = svg group id or id of elements that want to show in details page (string)
  - title = title that show in details page (string)
  - text = text that show in details page (string)
  - width = width of new svg that show in details page (number)
  - height = height of new svg that show in details page (number)
  - x = relative position of svg in details page (number)
  - y = relative position of svg in details page (number)
  example `svghero("id","title","this is text",800,400,-100,50)`
- And it's Done 🎉