# Render
```html
<textarea>
  
hello
</textarea>
<span>
  "\nhello"
</span>
```

# Update
```js
const textarea = container.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = value;
textarea.dispatchEvent(new window.Event("input", {
  bubbles: true
}));
```
```html
<textarea
  default-value="
hello"
>
  
world
</textarea>
<span>
  "\nworld"
</span>
```
## Change
```
UPDATE: span::text "\"\\nhello\"" => "\"\\nworld\""
```
