# Render `{"detailId":0,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p>
  no selection
</p>
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
<p>
  no selection
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"detailId":7,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section>
  <h2>
    Part 7
  </h2>
  <p>
    costs 
  </p>
  <button
    class="copy"
  >
    use price
  </button>
</section>
```
## Change
```
INSERT: p + section
REMOVE: .count + p
UPDATE: section > h2::text " " => "Part 7"
```

# Update
```js
document.querySelector("button.copy").click();
```
```html
<button
  class="count"
>
  clicked 70
</button>
<section>
  <h2>
    Part 7
  </h2>
  <p>
    costs 
  </p>
  <button
    class="copy"
  >
    use price
  </button>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "70"
```

# Update `{"detailId":0,"$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 70
</button>
<p>
  no selection
</p>
```
## Change
```
INSERT: section + p
REMOVE: .count + section
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 71
</button>
<p>
  no selection
</p>
```
## Change
```
UPDATE: .count::text@8 "70" => "71"
```
