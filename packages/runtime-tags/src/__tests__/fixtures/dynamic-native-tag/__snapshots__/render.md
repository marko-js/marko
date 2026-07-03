# Render `{"label":"Home","href":"/home"}`
```html
<a
  class="chip"
  href="/home"
  title="Home"
/>
<button
  id="toggle"
/>
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<span
  class="chip"
  title="Home"
/>
<button
  id="toggle"
/>
```
## Change
```
UPDATE: .chip[href] "/home" => null
REMOVE: .chip
INSERT: .chip
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<a
  class="chip"
  href="/home"
  title="Home"
/>
<button
  id="toggle"
/>
```
## Change
```
UPDATE: .chip[href] null => "/home"
REMOVE: .chip
INSERT: .chip
```
