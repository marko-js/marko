# Render `{"tag":"button"}`
```html
<button
  id="spread"
>
  spread
</button>
<button
  id="inline"
>
  inline
</button>
<button
  id="aliased"
>
  aliased
</button>
<div>
  0
</div>
```

# Update
```js
document.getElementById("spread").click();
```
```html
<button
  id="spread"
>
  spread
</button>
<button
  id="inline"
>
  inline
</button>
<button
  id="aliased"
>
  aliased
</button>
<div>
  1
</div>
```
## Change
```
UPDATE: div::text "0" => "1"
```

# Update
```js
document.getElementById("inline").click();
```
```html
<button
  id="spread"
>
  spread
</button>
<button
  id="inline"
>
  inline
</button>
<button
  id="aliased"
>
  aliased
</button>
<div>
  11
</div>
```
## Change
```
UPDATE: div::text "1" => "11"
```

# Update
```js
document.getElementById("aliased").click();
```
```html
<button
  id="spread"
>
  spread
</button>
<button
  id="inline"
>
  inline
</button>
<button
  id="aliased"
>
  aliased
</button>
<div>
  12
</div>
```
## Change
```
UPDATE: div::text "11" => "12"
```
