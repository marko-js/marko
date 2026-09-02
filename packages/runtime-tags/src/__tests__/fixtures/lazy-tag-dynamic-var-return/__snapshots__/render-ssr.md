# Render
```html
<button
  class="mount"
>
  mount
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
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .mount + .focus
```

# Update
```html
<button
  class="mount"
>
  mount
</button>
<p>
  focused 0
</p>
<span>
  x
</span>
<button
  class="focus"
>
  focus
</button>
```
## Change
```
INSERT: .mount + :is(p, span)
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
<p>
  focused 1
</p>
<span>
  x
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
