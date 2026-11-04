# Render `{"show":false}`

# Update `{"show":true}`
```html
<input
  value="a"
/>
<output>
  a
</output>
```
## Change
```
INSERT: input, output
```

# Update
```js
const input = document.querySelector("input");
input.value = value;
input.dispatchEvent(
  new input.ownerDocument.defaultView.Event("input", { bubbles: true }),
);
```
```html
<input
  default-value="a"
  value="ab"
/>
<output>
  ab
</output>
```
## Change
```
UPDATE: output::text "a" => "ab"
```
