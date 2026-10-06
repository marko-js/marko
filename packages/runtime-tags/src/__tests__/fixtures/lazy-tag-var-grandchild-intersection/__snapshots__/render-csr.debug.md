# Render
```html
<button
  class="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="inc"
>
   
</button>
```
## Change
```
INSERT: .toggle + .inc
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  0
</span>
<button
  class="inc"
>
  0:0
</button>
```
## Change
```
INSERT: .toggle + span
UPDATE: span::text " " => "0"
UPDATE: .inc::text " " => "0:0"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  1
</span>
<button
  class="inc"
>
  1:1
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
UPDATE: .inc::text "0:0" => "1:1"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  2
</span>
<button
  class="inc"
>
  2:2
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
UPDATE: .inc::text "1:1" => "2:2"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: .toggle + span
REMOVE: .toggle + button
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  0
</span>
<button
  class="inc"
>
  2:0
</button>
```
## Change
```
INSERT: .toggle + .inc
INSERT: .toggle + span
UPDATE: .inc::text " " => "2:0"
UPDATE: span::text " " => "0"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  3
</span>
<button
  class="inc"
>
  3:3
</button>
```
## Change
```
UPDATE: span::text "0" => "3"
UPDATE: .inc::text "2:0" => "3:3"
```
