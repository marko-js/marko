# Render
```html
<button
  class="toggle-outer"
>
  toggle
</button>
<button
  class="toggle-inner"
>
  toggle
</button>
<span>
  content
</span>
<div
  class="region-label"
>
  inner
</div>
<div
  class="region-label"
>
  outer
</div>
```

# Update
```js
container.querySelector(`button.toggle-${label}`).click();
```
```html
<button
  class="toggle-outer"
>
  toggle
</button>
```
## Change
```
REMOVE: .toggle-outer + button
REMOVE: .toggle-outer + span
REMOVE: .toggle-outer + div
REMOVE: .toggle-outer + div
```

# Update
```js
container.querySelector(`button.toggle-${label}`).click();
```
```html
<button
  class="toggle-outer"
>
  toggle
</button>
<button
  class="toggle-inner"
>
  toggle
</button>
<span>
  content
</span>
<div
  class="region-label"
>
  inner
</div>
<div
  class="region-label"
>
  outer
</div>
```
## Change
```
INSERT: .toggle-outer + div
INSERT: .toggle-outer + .toggle-inner
UPDATE: div:nth-of-type(2)::text " " => "outer"
INSERT: .toggle-inner + div
UPDATE: .toggle-inner[class] null => "toggle-inner"
INSERT: .toggle-inner + span
UPDATE: div:nth-of-type(1)::text " " => "inner"
```
