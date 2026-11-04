# Render `{"items":[{"id":1,"name":"A"}]}`
```html
<button
  class="b1"
>
  A
</button>
<span>
  script:A
</span>
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
<span>
  script:B
</span>
<p>
  none
</p>
```
## Change
```
UPDATE: .b1::text "A" => "B"
REMOVE: span::text("script:A")
INSERT: span::text("script:B")
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
<span>
  script:B
</span>
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
<span>
  script:C
</span>
<button
  class="b2"
>
  D
</button>
<span>
  script:D
</span>
<p>
  B
</p>
```
## Change
```
UPDATE: .b1::text "B" => "C"
INSERT: span:nth-of-type(1) + :is(.b2, span)
REMOVE: span:nth-of-type(1)::text("script:B")
INSERT: span:nth-of-type(1)::text("script:C")
INSERT: span:nth-of-type(2)::text("script:D")
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
<span>
  script:C
</span>
<button
  class="b2"
>
  D
</button>
<span>
  script:D
</span>
<p>
  C
</p>
```
## Change
```
UPDATE: p::text "B" => "C"
```
