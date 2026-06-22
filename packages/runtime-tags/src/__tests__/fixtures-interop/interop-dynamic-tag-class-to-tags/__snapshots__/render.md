# Render
```html
<button
  id="class"
>
  0
</button>
<button
  id="tags"
>
  0
</button>
```

# Update
```js
c.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  0
</button>
<button
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
c.querySelector("#class").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #class::text "0" => "1"
```

# Update
```js
c.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  id="tags"
>
  2
</button>
```
## Change
```
UPDATE: #tags::text "1" => "2"
```
