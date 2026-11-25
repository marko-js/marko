# Render `{"tag":null}`
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output />
```

# Update
```js
document.querySelector(".check").click();
```
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
UPDATE: output::text "" => "true/1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<div>
  <input />
</div>
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
REMOVE: input
INSERT: div
```

# Update
```js
document.querySelector(".check").click();
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
REMOVE: div
INSERT: input
```

# Update
```js
document.querySelector(".check").click();
```
