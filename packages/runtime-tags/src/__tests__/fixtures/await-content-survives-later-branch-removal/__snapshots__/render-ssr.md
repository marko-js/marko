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
INSERT: button
INSERT: button:nth-of-type(1)::text("0")
INSERT: button:nth-of-type(1) + span
INSERT: span:nth-of-type(1)::text("shown")
INSERT: span:nth-of-type(1) + button
INSERT: button:nth-of-type(2)::text("0")
INSERT: button:nth-of-type(2) + span
INSERT: span:nth-of-type(2)::text("shown")
INSERT: span:nth-of-type(2) + .hide
INSERT: .hide::text("hide")
```

# Update `click(".hide")`
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
REMOVE: button:nth-of-type(1) + span
REMOVE: button:nth-of-type(2) + span
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
UPDATE: button:nth-of-type(2)::text "0" => "1"
UPDATE: button:nth-of-type(1)::text "0" => "1"
```
