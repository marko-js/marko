# Render
```html
<button />
<div>
  0
</div>
<div>
  0
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  1
</div>
<div>
  1
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "0" => "1"
UPDATE: div:nth-of-type(2)::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  2
</div>
<div>
  2
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "1" => "2"
UPDATE: div:nth-of-type(2)::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  3
</div>
<div>
  3
</div>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "2" => "3"
UPDATE: div:nth-of-type(2)::text "2" => "3"
```
