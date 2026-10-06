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
UPDATE: input[value] "Close" => ""
INSERT: ::text("content")
REMOVE: ::text + button
UPDATE: p::text@0 "function" => "undefined"
REMOVE: ::text + span
UPDATE: p::text@10 "function" => "undefined"
INSERT: ::text + span
UPDATE: p::text@20 "undefined" => "function"
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
UPDATE: input[value] "" => "Close"
INSERT: button
REMOVE: button:nth-of-type(1) + ::text("content")
UPDATE: p::text@0 "undefined" => "function"
INSERT: button:nth-of-type(1)::text("content")
UPDATE: button:nth-of-type(1)[aria-label] null => "Close"
INSERT: button:nth-of-type(1) + span
UPDATE: p::text@9 "undefined" => "function"
REMOVE: span + span
UPDATE: p::text@18 "function" => "undefined"
```
