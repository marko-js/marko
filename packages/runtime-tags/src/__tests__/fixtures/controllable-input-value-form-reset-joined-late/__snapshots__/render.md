# Render
```html
<button
  class="show"
/>
<form>
  <button
    class="reset"
    type="reset"
  />
</form>
<p>
  init
</p>
```

# Update
```js
(document.querySelector("button.show")).click();
```
```html
<button
  class="show"
/>
<form>
  <input
    value="init"
  />
  <button
    class="reset"
    type="reset"
  />
</form>
<p>
  init
</p>
```
## Change
```
INSERT: form > input
```

# Update
```js
const input = document.querySelector("input");
input.value = "typed";
input.dispatchEvent(
  new document.defaultView.Event("input", { bubbles: true }),
);
```
```html
<button
  class="show"
/>
<form>
  <input
    default-value="init"
    value="typed"
  />
  <button
    class="reset"
    type="reset"
  />
</form>
<p>
  typed
</p>
```
## Change
```
UPDATE: p::text "init" => "typed"
```

# Update
```js
(document.querySelector("button.reset")).click();
```

# Update
```html
<button
  class="show"
/>
<form>
  <input
    value="init"
  />
  <button
    class="reset"
    type="reset"
  />
</form>
<p>
  init
</p>
```
## Change
```
UPDATE: p::text "typed" => "init"
```
