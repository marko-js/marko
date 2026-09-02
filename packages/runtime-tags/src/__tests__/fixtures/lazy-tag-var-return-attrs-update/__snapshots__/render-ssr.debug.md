# Render
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  inc
</button>
```

# Update
```js
document.querySelector(".mount").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .inc + .focus
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  inc
</button>
<p>
  focused 0
</p>
<span>
  x1
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .inc + :is(p, span)
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  inc
</button>
<p>
  focused 0
</p>
<span>
  x2
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
UPDATE: span::text "x1" => "x2"
```

# Update
```js
document.querySelector(".focus").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  inc
</button>
<p>
  focused 1
</p>
<span>
  x2
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
UPDATE: p::text@8 "0" => "1"
```
