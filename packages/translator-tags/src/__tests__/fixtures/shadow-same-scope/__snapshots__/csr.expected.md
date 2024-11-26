# Render {}
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

# Mutations
```
inserted div0, div1
```


# Render 
container.querySelectorAll("button")[buttonNum++].click()

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

# Mutations
```
div0/button0/#text0: "0" => "1"
```


# Render 
container.querySelectorAll("button")[buttonNum++].click()

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

# Mutations
```
div0/div1/button0/#text0: "0" => "1"
```


# Render 
container.querySelectorAll("button")[buttonNum++].click()

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

# Mutations
```
div0/div1/div1/button0/#text0: "0" => "1"
```


# Render 
container.querySelectorAll("button")[buttonNum++].click()

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

# Mutations
```
div1/button0/#text0: "0" => "1"
```


# Render 
buttonNum = 0

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

# Mutations
```

```