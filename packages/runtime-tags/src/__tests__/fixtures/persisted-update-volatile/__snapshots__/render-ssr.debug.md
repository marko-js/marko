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
  stamp:4
</div>
<span
  id="label"
>
  label:3
</span>
<button>
  1
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
UPDATE: #stamp::text@6 "2" => "4"
UPDATE: #label::text "label:1" => "label:3"
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
  stamp:4
</div>
<span
  id="label"
>
  label:3
</span>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```
