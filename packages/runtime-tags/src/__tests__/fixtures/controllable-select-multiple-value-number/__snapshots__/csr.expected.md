# Render
```html
<select
  multiple=""
>
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

# Mutations
```
INSERT select, span, button
```

# Render
```js
selectIndex(container, 0);
```
```html
<select
  multiple=""
>
  <option
    selected=""
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
  0,1
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "1" => "0,1"
```

# Render
```js
selectIndex(container, 1);
```
```html
<select
  multiple=""
>
  <option
    selected=""
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
  0,1
</span>
<button>
  Reset
</button>
```


# Render
```js
selectIndex(container, 2);
```
```html
<select
  multiple=""
>
  <option
    selected=""
    value="0"
  />
  <option
    selected=""
    value="1"
  />
  <option
    selected=""
    value="2"
  />
</select>
<span>
  0,1,2
</span>
<button>
  Reset
</button>
```

# Mutations
```
UPDATE span/#text "0,1" => "0,1,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<select
  multiple=""
>
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

# Mutations
```
UPDATE span/#text "0,1,2" => "1"
```