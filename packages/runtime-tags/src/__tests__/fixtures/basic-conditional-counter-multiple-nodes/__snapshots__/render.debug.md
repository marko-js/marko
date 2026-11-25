# Render
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 0
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 1
```
## Change
```
UPDATE: ::text@13 "0" => "1"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
```
## Change
```
REMOVE: ::text("1")
REMOVE: ::text("The count is ")
```

# Update
```js
document.querySelector("button.inc").click();
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 2
```
## Change
```
INSERT: ::text("The count is "), ::text("2")
UPDATE: ::text@13 "" => "2"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 3
```
## Change
```
UPDATE: ::text@13 "2" => "3"
```
