# Render
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 1
</div>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 2
</div>
```
## Change
```
INSERT: #toggle + div
REMOVE: div + div
UPDATE: div::text@6 "" => "2"
```

# Update
```js
document.querySelectorAll(".bump")[1].click();
```
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 3
</div>
```
## Change
```
UPDATE: div::text@6 "2" => "3"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  class="bump"
>
  bump
</button>
<button
  class="bump"
>
  bump
</button>
<button
  id="toggle"
>
  toggle
</button>
<div>
  value 1
</div>
```
## Change
```
INSERT: #toggle + div
REMOVE: div + div
UPDATE: div::text@6 "" => "1"
```
