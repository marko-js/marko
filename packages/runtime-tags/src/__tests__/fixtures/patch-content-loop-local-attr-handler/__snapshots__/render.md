# Render `{"items":[{"id":1,"name":"A"}]}`
```html
<button
  class="b1"
>
  A
</button>
<p>
  none
</p>
```

# Update `{"items":[{"id":1,"name":"B"}]}`
```html
<button
  class="b1"
>
  B
</button>
<p>
  none
</p>
```
## Change
```
UPDATE: .b1::text "A" => "B"
```

# Update
```js
document.querySelector("button.b1").click();
```
```html
<button
  class="b1"
>
  B
</button>
<p>
  B
</p>
```
## Change
```
UPDATE: p::text "none" => "B"
```

# Update `{"items":[{"id":1,"name":"C"},{"id":2,"name":"D"}]}`
```html
<button
  class="b1"
>
  C
</button>
<button
  class="b2"
>
  D
</button>
<p>
  B
</p>
```
## Change
```
UPDATE: .b1::text "B" => "C"
INSERT: .b1 + .b2
```

# Update
```js
document.querySelector("button.b1").click();
```
```html
<button
  class="b1"
>
  C
</button>
<button
  class="b2"
>
  D
</button>
<p>
  C
</p>
```
## Change
```
UPDATE: p::text "B" => "C"
```
