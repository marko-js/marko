# Render
```html
<div
  id="a"
>
  i:i
</div>
<div
  id="b"
>
  o:o
</div>
<button
  id="clear"
>
  clear
</button>
<button
  id="inc"
>
  inc
</button>
```

# Update
```js
container.querySelector("#clear").click();
```
```html
<div
  id="a"
>
  undefined:10
</div>
<div
  id="b"
>
  101:undefined
</div>
<button
  id="clear"
>
  clear
</button>
<button
  id="inc"
>
  inc
</button>
```
## Change
```
UPDATE: #a::text@0 "i" => "undefined"
UPDATE: #b::text@4 "o" => "undefined"
UPDATE: #a::text@10 "i" => "10"
UPDATE: #b::text@0 "o" => "101"
```

# Update
```js
container.querySelector("#inc").click();
```
```html
<div
  id="a"
>
  undefined:20
</div>
<div
  id="b"
>
  102:undefined
</div>
<button
  id="clear"
>
  clear
</button>
<button
  id="inc"
>
  inc
</button>
```
## Change
```
UPDATE: #a::text@10 "10" => "20"
UPDATE: #b::text@0 "101" => "102"
```
