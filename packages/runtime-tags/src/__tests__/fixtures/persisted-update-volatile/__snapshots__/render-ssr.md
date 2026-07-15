# Render `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<div
  id="stamp"
>
  stamp:2
</div>
<span
  id="label"
>
  label:1
</span>
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  First
</h1>
<div
  id="stamp"
>
  stamp:2
</div>
<span
  id="label"
>
  label:1
</span>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<div
  id="stamp"
>
  stamp:2
</div>
<span
  id="label"
>
  label:1
</span>
<button>
  1
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  Second
</h1>
<div
  id="stamp"
>
  stamp:2
</div>
<span
  id="label"
>
  label:1
</span>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
