# Render
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  0
</span>
<!---->
```

# Mutations
```
INSERT button0, button1, span, #comment
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
<span>
  1
</span>
<!---->
```

# Mutations
```
UPDATE span/#text "0" => "1"
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
REMOVE span after #text
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
<span>
  2
</span>
<!---->
```

# Mutations
```
INSERT span
REMOVE #text after span
UPDATE span/#text " " => "2"
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
<span>
  3
</span>
<!---->
```

# Mutations
```
UPDATE span/#text "2" => "3"
```