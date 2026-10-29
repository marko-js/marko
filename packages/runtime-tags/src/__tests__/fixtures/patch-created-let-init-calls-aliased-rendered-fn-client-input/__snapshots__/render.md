# Render `{"show":false,"v":"a","w":"1"}`
```html
<button
  class="set"
>
  set
</button>
```

# Update `{"show":true,"v":"a","w":"2"}`
```html
<button
  class="set"
>
  set
</button>
<p>
  a2
</p>
<span>
  2
</span>
```
## Change
```
INSERT: .set + :is(p, span)
UPDATE: p::text " " => "a2"
```

# Update
```js
document.querySelector("button.set").click();
```

# Update `{"show":true,"v":"a","w":"3"}`
```html
<button
  class="set"
>
  set
</button>
<p>
  a3
</p>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
UPDATE: p::text "a2" => "a3"
```

# Update `{"show":false,"v":"b","w":"4"}`
```html
<button
  class="set"
>
  set
</button>
```
## Change
```
REMOVE: .set + p
REMOVE: .set + span
```

# Update
```js
document.querySelector("button.set").click();
```

# Update `{"show":true,"v":"b","w":"5"}`
```html
<button
  class="set"
>
  set
</button>
<p>
  a!!5
</p>
<span>
  5
</span>
```
## Change
```
INSERT: .set + :is(p, span)
UPDATE: p::text " " => "a!!5"
```
