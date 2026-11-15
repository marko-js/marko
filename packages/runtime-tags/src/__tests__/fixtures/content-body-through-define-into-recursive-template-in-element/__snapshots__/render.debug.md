# Render
```html
<div>
  <div>
    <div>
      <div>
        0!
      </div>
    </div>
  </div>
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <div>
    <div>
      <div>
        1!
      </div>
    </div>
  </div>
</div>
<button>
  inc
</button>
```
## Change
```
UPDATE: div > div > div > div::text@0 "0" => "1"
```
