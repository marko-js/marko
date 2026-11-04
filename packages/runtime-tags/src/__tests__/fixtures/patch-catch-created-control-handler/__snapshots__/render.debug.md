# Render `{"fail":false,"label":"a"}`
```html
<p>
  ok
</p>
```

# Update `{"fail":true,"label":"b"}`
```html
<b>
  SHOWN_message
</b>
<input
  value="b"
/>
```
## Change
```
INSERT: b, input
REMOVE: input + p
UPDATE: b::text " " => "SHOWN_message"
UPDATE: input[value] null => "b"
```

# Update
```js
const input = document.querySelector("input");
input.value = "typed";
input.dispatchEvent(new document.defaultView.Event("input"));
```
## Console
```
LOG "changed" "typed"
```
