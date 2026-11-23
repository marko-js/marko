# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="first"
>
  first
</span>
<span
  id="second"
>
  second
</span>
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#first\". The module was loaded immediately."
WARN "A lazy load trigger could not find an element matching \"#second\". The module was loaded immediately."
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="first"
>
  first
</span>
<span
  id="second"
>
  second
</span>
<span>
  first loaded
</span>
<button
  class="count"
>
  0
</button>
<button
  class="count"
>
  0
</button>
```
## Change
```
INSERT: #second + span
INSERT: span:nth-of-type(3) + button
INSERT: button:nth-of-type(2) + button
```

# Update
```js
document.querySelector("#first").click();
```

# Update
```js
document.querySelector("#second").click();
```

# Update
```js
document.querySelector(".count").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span
  id="first"
>
  first
</span>
<span
  id="second"
>
  second
</span>
<span>
  first loaded
</span>
<button
  class="count"
>
  1
</button>
<button
  class="count"
>
  0
</button>
```
## Change
```
UPDATE: button:nth-of-type(2)::text "0" => "1"
```
