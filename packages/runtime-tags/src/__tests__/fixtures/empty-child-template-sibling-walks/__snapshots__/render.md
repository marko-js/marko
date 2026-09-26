# Render
```html
<div />
<span>
  0
</span>
<p>
  <b />
  tail more 
  <span>
    0
  </span>
  <i>
    0
  </i>
</p>
<p>
  lead head
  <b />
  <span>
    0
  </span>
  <i>
    0
  </i>
</p>
<p>
  lead  more 
  <span>
    0
  </span>
  <i>
    0
  </i>
</p>
<p>
  lead  more 
  <span>
    0
  </span>
  <i>
    0
  </i>
</p>
<button />
```
## Console
```
LOG 0
LOG 0
LOG 0
LOG 0
LOG 0
```

# Update
```js
document.querySelector("button").click();
```
```html
<div />
<span>
  1
</span>
<p>
  <b />
  tail more 
  <span>
    1
  </span>
  <i>
    1
  </i>
</p>
<p>
  lead head
  <b />
  <span>
    1
  </span>
  <i>
    1
  </i>
</p>
<p>
  lead  more 
  <span>
    1
  </span>
  <i>
    1
  </i>
</p>
<p>
  lead  more 
  <span>
    1
  </span>
  <i>
    1
  </i>
</p>
<button />
```
## Change
```
UPDATE: span::text "0" => "1"
UPDATE: p:nth-of-type(1) > span::text "0" => "1"
UPDATE: p:nth-of-type(1) > i::text "0" => "1"
UPDATE: p:nth-of-type(2) > span::text "0" => "1"
UPDATE: p:nth-of-type(2) > i::text "0" => "1"
UPDATE: p:nth-of-type(3) > span::text "0" => "1"
UPDATE: p:nth-of-type(3) > i::text "0" => "1"
UPDATE: p:nth-of-type(4) > span::text "0" => "1"
UPDATE: p:nth-of-type(4) > i::text "0" => "1"
```
## Console
```
LOG 1
LOG 1
LOG 1
LOG 1
LOG 1
```
