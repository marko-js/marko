# Render

# Update
```html
<button
  class="inc"
>
  0
</button>
<span>
  shown
</span>
<button
  class="inc"
>
  0
</button>
<span>
  shown
</span>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
INSERT: button:nth-of-type(1)
INSERT: button:nth-of-type(1)::text("0")
INSERT: span:nth-of-type(1)
INSERT: span:nth-of-type(1)::text("shown")
INSERT: button:nth-of-type(2)
INSERT: button:nth-of-type(2)::text("0")
INSERT: span:nth-of-type(2)
INSERT: span:nth-of-type(2)::text("shown")
INSERT: .hide
INSERT: .hide::text("hide")
```

# Update
```js
document.querySelector(".hide").click();
```
```html
<button
  class="inc"
>
  0
</button>
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
REMOVE: span
REMOVE: span
```

# Update
```js
for (const button of document.querySelectorAll(".inc")) {
  button.click();
}
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
>
  hide
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: button:nth-of-type(2)::text "0" => "1"
```
