# Render
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 0
</div>
<span>
  outer text 0
</span>
<section>
  dynamic text 0
</section>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 1
</div>
<span>
  outer text 1
</span>
<section>
  dynamic text 1
</section>
```
## Change
```
UPDATE: section::text@13 "0" => "1"
UPDATE: div::text@10 "0" => "1"
UPDATE: span::text@11 "0" => "1"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 2
</div>
<span>
  outer text 2
</span>
<section>
  dynamic text 2
</section>
```
## Change
```
UPDATE: section::text@13 "1" => "2"
UPDATE: div::text@10 "1" => "2"
UPDATE: span::text@11 "1" => "2"
```
