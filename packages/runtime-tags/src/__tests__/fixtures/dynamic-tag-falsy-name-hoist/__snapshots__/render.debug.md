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
INSERT: div
REMOVE: div + input
INSERT: div > input
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
INSERT: input
REMOVE: input + div
```

# Update
```js
document.querySelector(".check").click();
```
