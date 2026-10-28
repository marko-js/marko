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
UPDATE: p:nth-of-type(1)::text "a10" => "a20"
UPDATE: p:nth-of-type(2)::text "a10" => "a20"
REMOVE: div:nth-of-type(1)::text("a1")
INSERT: div:nth-of-type(1)::text("a2")
UPDATE: div:nth-of-type(1)[data-runs] "1" => "2"
REMOVE: div:nth-of-type(2)::text("a1")
INSERT: div:nth-of-type(2)::text("a2")
UPDATE: div:nth-of-type(2)[data-runs] "1" => "2"
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
UPDATE: p:nth-of-type(1)::text "a20" => "a21"
```

# Update `{"show":true,"items":[1,2,3],"a":"a3","b":"a3b"}`
```html
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a31
</p>
<div
  class="e"
  data-runs="3"
>
  a3
</div>
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a30
</p>
<div
  class="e"
  data-runs="3"
>
  a3
</div>
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a30
</p>
<div
  class="e"
  data-runs="1"
>
  a3
</div>
```
## Change
```
INSERT: div:nth-of-type(2) + :is(button, p, div)
UPDATE: p:nth-of-type(1)::text "a21" => "a31"
UPDATE: p:nth-of-type(2)::text "a20" => "a30"
UPDATE: p:nth-of-type(3)::text " " => "a30"
INSERT: div:nth-of-type(3)::text("a3")
UPDATE: div:nth-of-type(3)[data-runs] null => "1"
REMOVE: div:nth-of-type(1)::text("a2")
INSERT: div:nth-of-type(1)::text("a3")
UPDATE: div:nth-of-type(1)[data-runs] "2" => "3"
REMOVE: div:nth-of-type(2)::text("a2")
INSERT: div:nth-of-type(2)::text("a3")
UPDATE: div:nth-of-type(2)[data-runs] "2" => "3"
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
  data-runs="4"
>
  a5
</div>
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a50
</p>
<div
  class="e"
  data-runs="4"
>
  a5
</div>
```
## Change
```
REMOVE: div:nth-of-type(2) + button
REMOVE: div:nth-of-type(2) + p
REMOVE: div:nth-of-type(2) + div
UPDATE: p:nth-of-type(1)::text "a31" => "a51"
UPDATE: p:nth-of-type(2)::text "a30" => "a50"
REMOVE: div:nth-of-type(1)::text("a3")
INSERT: div:nth-of-type(1)::text("a5")
UPDATE: div:nth-of-type(1)[data-runs] "3" => "4"
REMOVE: div:nth-of-type(2)::text("a3")
INSERT: div:nth-of-type(2)::text("a5")
UPDATE: div:nth-of-type(2)[data-runs] "3" => "4"
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
  data-runs="5"
>
  a6
</div>
<button
  class="n"
>
  n
</button>
<p
  class="j"
>
  a60
</p>
<div
  class="e"
  data-runs="5"
>
  a6
</div>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "a51" => "a61"
UPDATE: p:nth-of-type(2)::text "a50" => "a60"
REMOVE: div:nth-of-type(1)::text("a5")
INSERT: div:nth-of-type(1)::text("a6")
UPDATE: div:nth-of-type(1)[data-runs] "4" => "5"
REMOVE: div:nth-of-type(2)::text("a5")
INSERT: div:nth-of-type(2)::text("a6")
UPDATE: div:nth-of-type(2)[data-runs] "4" => "5"
```
