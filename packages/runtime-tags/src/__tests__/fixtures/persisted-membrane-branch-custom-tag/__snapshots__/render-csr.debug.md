# Render `{"detail":true,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="detail"
>
  detail 0
</p>
<span
  class="static"
>
  static
</span>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="detail"
>
  detail 1
</p>
<span
  class="static"
>
  static
</span>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
UPDATE: .detail::text@7 "0" => "1"
```

# Update
```js
assert.equal(detailText(document), "detail 1");
```

# Update `{"detail":true,"$global":{"persisted":true}}`

# Update `{"detail":true,"$global":{"persisted":true}}`

# Update
```js
assert.equal(detailText(document), "detail 1");
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="detail"
>
  detail 2
</p>
<span
  class="static"
>
  static
</span>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
UPDATE: .detail::text@7 "1" => "2"
```

# Update
```js
assert.equal(detailText(document), "detail 2");
```
