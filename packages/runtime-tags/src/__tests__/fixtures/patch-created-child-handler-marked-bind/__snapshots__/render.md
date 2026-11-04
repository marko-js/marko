# Render `{"show":false}`
```html
<p>
  0
</p>
```

# Update `{"show":true}`
```html
<textarea />
<p>
  0
</p>
```
## Change
```
INSERT: textarea
```

# Update
```js
document
.querySelector("textarea") 
.dispatchEvent(
  new document.defaultView.Event("keydown", { bubbles: true }),
);
```
```html
<textarea />
<p>
  1
</p>
```
## Change
```
UPDATE: p::text "0" => "1"
```
