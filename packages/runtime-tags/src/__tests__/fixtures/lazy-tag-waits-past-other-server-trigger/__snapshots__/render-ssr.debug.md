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
<span>
  first loaded
</span>
<button
  class="count"
>
  0
</button>
```

# Update
```js
document.querySelector(".toggle").click();
```

# Update
```js
document.querySelector("#first").click();
```

# Update
```js
document.querySelector("#second").click();
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
INSERT: button:nth-of-type(3)
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
