# Render `{"show":true,"items":[1,2],"a":"a1","b":"a1b"}`
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a10
</p>
<div
  class="e"
  data-runs="1"
>
  a1
</div>
```

# Update `{"show":true,"items":[1,2],"a":"a2","b":"a2b"}`
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a20
</p>
<div
  class="e"
  data-runs="2"
>
  a2
</div>
```
## Change
```
UPDATE: .j::text "a10" => "a20"
REMOVE: .e::text("a1")
INSERT: .e::text("a2")
UPDATE: .e[data-runs] "1" => "2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a21
</p>
<div
  class="e"
  data-runs="2"
>
  a2
</div>
```
## Change
```
UPDATE: .j::text "a20" => "a21"
```

# Update `{"show":true,"items":[1,2],"a":"a5","b":"a5b"}`
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a51
</p>
<div
  class="e"
  data-runs="3"
>
  a5
</div>
```
## Change
```
UPDATE: .j::text "a21" => "a51"
REMOVE: .e::text("a2")
INSERT: .e::text("a5")
UPDATE: .e[data-runs] "2" => "3"
```

# Update `{"show":true,"items":[1,2],"a":"a6","b":"a6b"}`
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a61
</p>
<div
  class="e"
  data-runs="4"
>
  a6
</div>
```
## Change
```
UPDATE: .j::text "a51" => "a61"
REMOVE: .e::text("a5")
INSERT: .e::text("a6")
UPDATE: .e[data-runs] "3" => "4"
```
