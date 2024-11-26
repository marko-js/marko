# Render {}
```html
<button>
  Toggle
</button>
<div />
<div>
  <div>
    1
  </div>
  <div>
    <div>
      1.1
    </div>
  </div>
  <div>
    <div>
      1.2
    </div>
  </div>
  <div>
    <div>
      1.3
    </div>
  </div>
</div>
<div>
  <div>
    2
  </div>
  <div>
    <div>
      2.1
    </div>
  </div>
  <div>
    <div>
      2.2
    </div>
  </div>
  <div>
    <div>
      2.3
    </div>
  </div>
</div>
<div>
  <div>
    3
  </div>
  <div>
    <div>
      3.1
    </div>
  </div>
  <div>
    <div>
      3.2
    </div>
  </div>
  <div>
    <div>
      3.3
    </div>
  </div>
</div>
```


# Render 
container.querySelector("button").click()

```html
<button>
  Toggle
</button>
<div>
  
destroyed 3
destroyed 3.1
destroyed 3.2
destroyed 3.3
destroyed 1.3
destroyed 2.3
</div>
<div>
  <div>
    1
  </div>
  <div>
    <div>
      1.1
    </div>
  </div>
  <div>
    <div>
      1.2
    </div>
  </div>
</div>
<div>
  <div>
    2
  </div>
  <div>
    <div>
      2.1
    </div>
  </div>
  <div>
    <div>
      2.2
    </div>
  </div>
</div>
```