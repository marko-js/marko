# Render
```html
<div>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: .selected[class] null => "selected"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  class=""
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: div[class] "selected" => ""
```

# Update
```js
container.querySelector("button").click();
```
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: .selected[class] "" => "selected"
```
