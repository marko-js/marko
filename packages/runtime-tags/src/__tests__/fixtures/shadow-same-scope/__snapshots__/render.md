# Render
```html
<div>
  <button>
    0
  </button>
  <div>
    <button>
      0
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```

# Update
```js
container.querySelectorAll("button")[next(container)].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      0
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > button::text "0" => "1"
```

# Update
```js
container.querySelectorAll("button")[next(container)].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        0
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > div > button::text "0" => "1"
```

# Update
```js
container.querySelectorAll("button")[next(container)].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        1
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    0
  </button>
</div>
```
## Change
```
UPDATE: div:nth-of-type(1) > div > div > button::text "0" => "1"
```

# Update
```js
container.querySelectorAll("button")[next(container)].click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    <button>
      1
    </button>
    <div>
      <button>
        1
      </button>
    </div>
  </div>
</div>
<div>
  <button>
    1
  </button>
</div>
```
## Change
```
UPDATE: div:nth-of-type(2) > button::text "0" => "1"
```
