# Render
```html
<button>
  0
</button>
<section>
  <span>
    0
  </span>
</section>
<em>
  wrapped
</em>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<section>
  <span>
    1
  </span>
</section>
<em>
  wrapped
</em>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: section > span::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
<section>
  <span>
    2
  </span>
</section>
<em>
  wrapped
</em>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: section > span::text "1" => "2"
```
