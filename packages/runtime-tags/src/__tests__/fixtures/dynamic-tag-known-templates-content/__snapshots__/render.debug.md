# Render
```html
<button
  id="swap"
>
  swap
</button>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
for (const button of document.querySelectorAll(
".toggle",
  )) {
button.click();
}
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  class="toggle"
>
  toggle
</button>
first
<button
  class="toggle"
>
  toggle
</button>
second body
```
## Change
```
INSERT: button:nth-of-type(2) + ::text("first")
UPDATE: ::text@0 " " => "first"
INSERT: button:nth-of-type(3) + ::text("second body")
```

# Update
```js
document.querySelector("#swap").click();
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  class="toggle"
>
  toggle
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: #swap + button
REMOVE: button:nth-of-type(2) + button
REMOVE: button:nth-of-type(2) + ::text("first")
INSERT: button:nth-of-type(2) + button
REMOVE: button:nth-of-type(3) + button
REMOVE: button:nth-of-type(3) + ::text("second body")
```

# Update
```js
for (const button of document.querySelectorAll(
".toggle",
  )) {
button.click();
}
```
```html
<button
  id="swap"
>
  swap
</button>
<button
  class="toggle"
>
  toggle
</button>
first body
<button
  class="toggle"
>
  toggle
</button>
second
```
## Change
```
INSERT: button:nth-of-type(3) + ::text("second")
INSERT: button:nth-of-type(2) + ::text("first body")
UPDATE: ::text@10 " " => "second"
```
