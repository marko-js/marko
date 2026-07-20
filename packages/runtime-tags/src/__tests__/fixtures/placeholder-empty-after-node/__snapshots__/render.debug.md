# Render
```html
<div>
  <span>
    s
  </span>
</div>
<div>
  <!--note-->
</div>
<button>
  set
</button>
```

# Update
```js
document.querySelector(`button`).click();
```
```html
<div>
  <span>
    s
  </span>
  filled
</div>
<div>
  <!--note-->
  filled
</div>
<button>
  set
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "" => "filled"
UPDATE: div:nth-of-type(2)::text "" => "filled"
```
