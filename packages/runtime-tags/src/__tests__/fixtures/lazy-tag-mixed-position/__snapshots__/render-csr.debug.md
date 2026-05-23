# Render
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
```

# Update
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<span>
  0
</span>
```
## Change
```
INSERT: .inc + span
UPDATE: span::text " " => "0"
```

# Update
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<span>
   
</span>
<span>
  0
</span>
```
## Change
```
INSERT: .inc + span
```

# Update
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<span>
  0
</span>
<span>
  0
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text " " => "0"
```

# Update
```js
container.querySelector(".inc").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<span>
  1
</span>
<span>
  1
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "0" => "1"
UPDATE: span:nth-of-type(2)::text "0" => "1"
```

# Update
```js
container.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<span>
  1
</span>
```
## Change
```
REMOVE: span + span
```
