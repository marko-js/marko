# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  0 static
</button>
<div>
  dynamic
</div>
```

# Update
```js
document.querySelector(".box").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  1 static
</button>
<div>
  dynamic
</div>
```
## Change
```
UPDATE: .box::text@0 "0" => "1"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  1 static
</button>
<button
  class="box"
>
  0 dynamic
</button>
```
## Change
```
INSERT: button:nth-of-type(2) + button
REMOVE: button:nth-of-type(3) + div
INSERT: button:nth-of-type(3)::text@1 + ::text("dynamic")
UPDATE: button:nth-of-type(3)::text@0 "" => "0"
```

# Update
```js
const boxes = document.querySelectorAll(".box");
boxes[boxes.length - 1].click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  1 static
</button>
<button
  class="box"
>
  1 dynamic
</button>
```
## Change
```
UPDATE: button:nth-of-type(3)::text@0 "0" => "1"
```

# Update
```js
document.querySelector(".box").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  2 static
</button>
<button
  class="box"
>
  1 dynamic
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text@0 "1" => "2"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  class="box"
>
  2 static
</button>
<div>
  dynamic
</div>
```
## Change
```
INSERT: .box + div
REMOVE: div + .box
INSERT: div::text("dynamic")
```
