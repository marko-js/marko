# Render
```html
<button
  class="show-0"
>
  show
</button>
<button
  class="change-0"
>
  change
</button>
<button
  class="show-1"
>
  show
</button>
<button
  class="change-1"
>
  change
</button>
```

# Update
```js
container.querySelector(sel).click();
```
```html
<button
  class="show-0"
>
  show
</button>
<span
  class="display"
>
  light-0
</span>
<button
  class="change-0"
>
  change
</button>
<button
  class="show-1"
>
  show
</button>
<button
  class="change-1"
>
  change
</button>
```
## Change
```
INSERT: .show-0 + .display
UPDATE: .display::text " " => "light-0"
```

# Update
```js
container.querySelector(sel).click();
```
```html
<button
  class="show-0"
>
  show
</button>
<span
  class="display"
>
  light-0
</span>
<button
  class="change-0"
>
  change
</button>
<button
  class="show-1"
>
  show
</button>
<span
  class="display"
>
  light-1
</span>
<button
  class="change-1"
>
  change
</button>
```
## Change
```
INSERT: .show-1 + span
UPDATE: span:nth-of-type(2)::text " " => "light-1"
```

# Update
```js
container.querySelector(sel).click();
```
```html
<button
  class="show-0"
>
  show
</button>
<span
  class="display"
>
  light-0
</span>
<button
  class="change-0"
>
  change
</button>
<button
  class="show-1"
>
  show
</button>
<span
  class="display"
>
  dark-1
</span>
<button
  class="change-1"
>
  change
</button>
```
## Change
```
UPDATE: span:nth-of-type(2)::text "light-1" => "dark-1"
```
