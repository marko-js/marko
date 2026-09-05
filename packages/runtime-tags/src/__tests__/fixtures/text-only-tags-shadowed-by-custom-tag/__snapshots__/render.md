# Render
```html
<button>
  inc
</button>
<div
  class="title"
>
  title 1
</div>
<div
  class="textarea"
>
  textarea 1
</div>
```

# Update
```js
assertBodies(document, 1);
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div
  class="title"
>
  title 2
</div>
<div
  class="textarea"
>
  textarea 2
</div>
```
## Change
```
UPDATE: .title::text@6 "1" => "2"
UPDATE: .textarea::text@9 "1" => "2"
```

# Update
```js
assertBodies(document, 2);
```
