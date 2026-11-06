# Render `{"show":true}`
```html
<div
  class="ctrue"
>
  <button>
    true
  </button>
</div>
<p>
  shown
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="cfalse"
>
  <button />
</div>
```
## Change
```
UPDATE: .cfalse[class] "ctrue" => "cfalse"
REMOVE: .cfalse + p
UPDATE: .cfalse > button::text "true" => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="ctrue"
>
  <button>
    true
  </button>
</div>
<p>
  shown
</p>
```
## Change
```
UPDATE: .ctrue[class] "cfalse" => "ctrue"
INSERT: .ctrue + p
UPDATE: .ctrue > button::text "" => "true"
```
