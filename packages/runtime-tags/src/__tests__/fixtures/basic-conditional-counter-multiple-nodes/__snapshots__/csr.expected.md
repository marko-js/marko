# Render
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 0
<!---->
```

# Mutations
```
INSERT button0, button1, #text0, #text1, #comment
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 1
<!---->
```

# Mutations
```
UPDATE #text1 "0" => "1"
```

# Render
```js
container.querySelector("button.toggle").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text after #text
REMOVE #text after #text
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<!---->
```


# Render
```js
container.querySelector("button.toggle").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 2
<!---->
```

# Mutations
```
INSERT #text0
INSERT #text1
REMOVE #text after #text1
UPDATE #text1 "" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 3
<!---->
```

# Mutations
```
UPDATE #text1 "2" => "3"
```