# Render `{"$global":{"persisted":true,"topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="note"
>
  sales brief
</p>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="note"
>
  sales brief
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"topic":"growth"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="note"
>
  duplicate wins
</p>
```
## Change
```
UPDATE: .note::text "sales brief" => "duplicate wins"
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="note"
>
  duplicate wins
</p>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"topic":"trends"}}`

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<p
  class="note"
>
  duplicate wins
</p>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```

# Update `{"$global":{"persisted":true,"topic":"ignored"}}` failed: a persisted update frame executed without producing fills

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 4
</button>
<p
  class="note"
>
  duplicate wins
</p>
```
## Change
```
UPDATE: .count::text@8 "3" => "4"
```

# Update `{"$global":{"persisted":true,"topic":"quarterly"}}`
```html
<button
  class="count"
>
  clicked 4
</button>
<p
  class="note"
>
  quarterly brief
</p>
```
## Change
```
UPDATE: .note::text "duplicate wins" => "quarterly brief"
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 5
</button>
<p
  class="note"
>
  quarterly brief
</p>
```
## Change
```
UPDATE: .count::text@8 "4" => "5"
```
