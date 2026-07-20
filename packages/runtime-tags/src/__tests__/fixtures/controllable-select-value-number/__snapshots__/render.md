# Render
```html
<select>
  <option
    value="0"
  />
  <option
    selected=""
    value="1"
  />
  <option
    value="2"
  />
</select>
<span>
  1
</span>
<button>
  Reset
</button>
```

# Update
```js
selectIndex(document, 0);
```
```html
<select>
  <option
    selected=""
    value="0"
  />
  <option
    default-selected=""
    value="1"
  />
  <option
    value="2"
  />
</select>
<span>
  0
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "1" => "0"
```

# Update
```js
selectIndex(document, 1);
```
```html
<select>
  <option
    value="0"
  />
  <option
    selected=""
    value="1"
  />
  <option
    value="2"
  />
</select>
<span>
  1
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update
```js
selectIndex(document, 2);
```
```html
<select>
  <option
    value="0"
  />
  <option
    default-selected=""
    value="1"
  />
  <option
    selected=""
    value="2"
  />
</select>
<span>
  2
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<select>
  <option
    value="0"
  />
  <option
    selected=""
    value="1"
  />
  <option
    value="2"
  />
</select>
<span>
  1
</span>
<button>
  Reset
</button>
```
## Change
```
UPDATE: span::text "2" => "1"
```
