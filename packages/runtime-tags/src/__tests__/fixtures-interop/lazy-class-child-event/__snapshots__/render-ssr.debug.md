# Render `{"value":1}`
```html
<button
  id="inc"
>
  Inc
</button>
<span
  id="child"
>
  0
</span>
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
const {
defaultView
  } = container.ownerDocument;
  container.ownerDocument.body.dispatchEvent(new defaultView.MouseEvent("mouseover"));
```
```html
<button
  id="inc"
>
  Inc
</button>
<span
  id="child"
>
  1
</span>
```
## Change
```
UPDATE: #child::text "0" => "1"
```
## Console
```
LOG "loaded"
```

# Update
```js
container.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  Inc
</button>
<span
  id="child"
>
  2
</span>
```
## Change
```
UPDATE: #child::text "1" => "2"
```
