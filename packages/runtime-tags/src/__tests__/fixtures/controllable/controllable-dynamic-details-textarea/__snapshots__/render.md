# Render
```html
<details>
  <summary>
    toggle
  </summary>
  <textarea>
    first
  </textarea>
</details>
<output>
  closed/first
</output>
```

# Update
```js
const details = document.querySelector("details");
const window = details.ownerDocument.defaultView;
details.open = true;
details.dispatchEvent(new window.Event("toggle", { bubbles: false }));
```
```html
<details
  open=""
>
  <summary>
    toggle
  </summary>
  <textarea>
    first
  </textarea>
</details>
<output>
  open/first
</output>
```
## Change
```
UPDATE: details[open] null => ""
UPDATE: details[open] "" => ""
UPDATE: output::text@0 "closed" => "open"
UPDATE: details[open] null => ""
```

# Update
```js
const textarea = document.querySelector("textarea");
const window = textarea.ownerDocument.defaultView;
textarea.value = "second";
textarea.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<details
  open=""
>
  <summary>
    toggle
  </summary>
  <textarea
    default-value="first"
  >
    second
  </textarea>
</details>
<output>
  open/second
</output>
```
## Change
```
UPDATE: output::text@5 "first" => "second"
```
