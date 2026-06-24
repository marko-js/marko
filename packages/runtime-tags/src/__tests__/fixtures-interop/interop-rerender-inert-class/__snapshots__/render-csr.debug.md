# Render
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi
</div>
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!
</div>
```
## Change
```
UPDATE: #display::text "hi" => "hi!"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  Tags
</button>
<div
  id="display"
>
  hi!!
</div>
```
## Change
```
UPDATE: #display::text "hi!" => "hi!!"
```
