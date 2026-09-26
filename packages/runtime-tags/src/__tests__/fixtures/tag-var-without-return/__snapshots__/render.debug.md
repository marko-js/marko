# Render
```html
<span>
  child
</span>
<b>
  foo
</b>
<span>
  child
</span>
<div
  class="x"
>
  none
</div>
<div
  class="z"
>
  none
</div>
<div
  class="w"
>
  none
</div>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  child
</span>
<b>
  foo
</b>
<div
  class="x"
>
  none
</div>
<div
  class="z"
>
  none
</div>
<div
  class="w"
>
  some
</div>
<button>
  toggle
</button>
```
## Change
```
REMOVE: b + span
UPDATE: .w::text "none" => "some"
```

# Update
```js
document.querySelector("button").click();
```
```html
<span>
  child
</span>
<b>
  foo
</b>
<span>
  child
</span>
<div
  class="x"
>
  none
</div>
<div
  class="z"
>
  none
</div>
<div
  class="w"
>
  none
</div>
<button>
  toggle
</button>
```
## Change
```
INSERT: b + span
UPDATE: .w::text "some" => "none"
```
