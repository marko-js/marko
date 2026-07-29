# Render `{"show":false,"$global":{"persisted":true,"search":[{"q":"a"}]}}`
```html
<header
  class="site"
>
  Store
</header>
<button
  class="count"
>
  clicked 0
</button>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<header
  class="site"
>
  Store
</header>
<button
  class="count"
>
  clicked 1
</button>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"show":true,"$global":{"persisted":true,"search":[{"q":"b"}]}}`
```html
<header
  class="site"
>
  Store
</header>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="detail"
>
  detail 1
</button>
```
## Change
```
INSERT: .count + .detail
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<header
  class="site"
>
  Store
</header>
<button
  class="count"
>
  clicked 2
</button>
<button
  class="detail"
>
  detail 2
</button>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
UPDATE: .detail::text@7 "1" => "2"
```
