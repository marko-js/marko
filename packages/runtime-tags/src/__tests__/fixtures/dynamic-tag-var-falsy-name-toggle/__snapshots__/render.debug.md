# Render
```html
<button
  aria-label="Close"
>
  content
</button>
<span />
<p>
  function function undefined
</p>
<input
  value="Close"
/>
<button
  id="toggle"
/>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
content
<span />
<p>
  undefined undefined function
</p>
<input
  value="Close"
/>
<button
  id="toggle"
/>
```
## Change
```
REMOVE: button
REMOVE: span
INSERT: ::text("content")
INSERT: span
UPDATE: p::text@0 "function" => "undefined"
UPDATE: p::text@10 "function" => "undefined"
UPDATE: p::text@20 "undefined" => "function"
UPDATE: input[value] "Close" => ""
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  aria-label="Close"
>
  content
</button>
<span />
<p>
  function function undefined
</p>
<input
  value="Close"
/>
<button
  id="toggle"
/>
```
## Change
```
REMOVE: ::text("content")
REMOVE: span
INSERT: button:nth-of-type(1)
UPDATE: button:nth-of-type(1)[aria-label] null => "Close"
INSERT: span
UPDATE: p::text@0 "undefined" => "function"
UPDATE: p::text@9 "undefined" => "function"
UPDATE: p::text@18 "function" => "undefined"
UPDATE: input[value] "" => "Close"
```
