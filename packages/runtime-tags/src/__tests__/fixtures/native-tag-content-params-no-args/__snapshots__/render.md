# Render `{"tag":"p"}`
```html
<div>
  <i>
    none
  </i>
</div>
<section>
  <b>
    1
  </b>
</section>
<p>
  body
</p>
<p>
  <i>
    none
  </i>
</p>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <b>
    1
  </b>
</div>
<section>
  <i>
    none
  </i>
</section>
<p>
  body
</p>
<p>
  <b>
    1
  </b>
</p>
<button />
```
## Change
```
REMOVE: div > i
INSERT: div > b
REMOVE: section > b
INSERT: section > i
REMOVE: p:nth-of-type(2) > i
INSERT: p:nth-of-type(2) > b
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <i>
    none
  </i>
</div>
<section>
  <b>
    1
  </b>
</section>
<p>
  body
</p>
<p>
  <i>
    none
  </i>
</p>
<button />
```
## Change
```
REMOVE: div > b
INSERT: div > i
REMOVE: section > i
INSERT: section > b
REMOVE: p:nth-of-type(2) > b
INSERT: p:nth-of-type(2) > i
```
