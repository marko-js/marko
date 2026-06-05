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
```

# Update
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
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update
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
```
## Change
```
REMOVE: .toggle + span
```

# Update
```js
container.querySelector("button.inc").click();
```

# Update
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
```
## Change
```
INSERT: .toggle + span
UPDATE: span::text " " => "2"
```

# Update
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
```
## Change
```
UPDATE: span::text "2" => "3"
```
