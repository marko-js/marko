# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update `{"show":true,"label":"b","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p
  class="v"
>
  a|a:b
</p>
<button
  class="e"
>
  e
</button>
```
## Change
```
INSERT: .swap + :is(.v, .e)
UPDATE: .v::text@0 "" => "a"
UPDATE: .v::text@2 "" => "a:b"
```

# Update
```js
document.querySelector("button.swap").click();
```

# Update
```js
document.querySelector("button.e").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p
  class="v"
>
  a?|a:b?
</p>
<button
  class="e"
>
  e
</button>
```
## Change
```
UPDATE: .v::text@0 "a" => "a?"
UPDATE: .v::text@3 "a:b" => "a:b?"
```
