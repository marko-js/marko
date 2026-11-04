# Render `{"show":false}`
```html
<p />
```

# Update `{"show":true}`
```html
<textarea />
<p />
```
## Change
```
INSERT: textarea
```

# Update
```js
const area = document.querySelector("textarea");
area.value = "hi";
area.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
```
```html
<textarea>
  hi
</textarea>
<p>
  hi
</p>
```
## Change
```
UPDATE: p::text "" => "hi"
```
