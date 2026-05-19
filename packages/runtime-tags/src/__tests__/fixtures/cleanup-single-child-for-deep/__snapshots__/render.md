# Render
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

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  
destroyed 3.1
destroyed 3.2
destroyed 3.3
destroyed 3
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
## Change
```
REMOVE: div:nth-of-type(3) + div
REMOVE: div:nth-of-type(2) > div:nth-of-type(3) + div
REMOVE: div:nth-of-type(3) > div:nth-of-type(3) + div
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1")
REMOVE: div:nth-of-type(1)::text("\ndestroyed 3.1")
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2")
REMOVE: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2")
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3")
REMOVE: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3")
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3\ndestroyed 3")
REMOVE: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3\ndestroyed 3")
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3\ndestroyed 3\ndestroyed 1.3")
REMOVE: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3\ndestroyed 3\ndestroyed 1.3")
INSERT: div:nth-of-type(1)::text("\ndestroyed 3.1\ndestroyed 3.2\ndestroyed 3.3\ndestroyed 3\ndestroyed 1.3\ndestroyed 2.3")
```
