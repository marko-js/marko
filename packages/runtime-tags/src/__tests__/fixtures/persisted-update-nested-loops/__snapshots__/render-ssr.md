# Render `{"$global":{"persisted":true,"params":{"path":"intro","region":"na"},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  0
</button>
<nav>
  <div>
    <h4>
      Start
    </h4>
    <a
      class="link active"
    >
      Intro
    </a>
    <a
      class="link"
    >
      Setup
    </a>
  </div>
  <div>
    <h4>
      Guides
    </h4>
    <a
      class="link"
    >
      Routing
    </a>
    <a
      class="link"
    >
      Data
    </a>
  </div>
</nav>
<p>
  <b
    class="on"
  >
    na
  </b>
  <b>
    eu
  </b>
  <b>
    apac
  </b>
</p>
```

# Update
```js
container.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  1
</button>
<nav>
  <div>
    <h4>
      Start
    </h4>
    <a
      class="link active"
    >
      Intro
    </a>
    <a
      class="link"
    >
      Setup
    </a>
  </div>
  <div>
    <h4>
      Guides
    </h4>
    <a
      class="link"
    >
      Routing
    </a>
    <a
      class="link"
    >
      Data
    </a>
  </div>
</nav>
<p>
  <b
    class="on"
  >
    na
  </b>
  <b>
    eu
  </b>
  <b>
    apac
  </b>
</p>
```
## Change
```
UPDATE: .bump::text "0" => "1"
```

# Update `{"$global":{"persisted":true,"params":{"path":"routing","region":"na"},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  1
</button>
<nav>
  <div>
    <h4>
      Start
    </h4>
    <a
      class="link"
    >
      Intro
    </a>
    <a
      class="link"
    >
      Setup
    </a>
  </div>
  <div>
    <h4>
      Guides
    </h4>
    <a
      class="link active"
    >
      Routing
    </a>
    <a
      class="link"
    >
      Data
    </a>
  </div>
</nav>
<p>
  <b
    class="on"
  >
    na
  </b>
  <b>
    eu
  </b>
  <b>
    apac
  </b>
</p>
```
## Change
```
UPDATE: nav > div:nth-of-type(1) > a:nth-of-type(1)[class] "link active" => "link"
REMOVE: nav > div:nth-of-type(1) > h4 + a
INSERT: nav > div:nth-of-type(1) > h4 + a
REMOVE: nav > div:nth-of-type(1) > h4 + a
INSERT: nav > div:nth-of-type(1) > a:nth-of-type(1) + a
UPDATE: .link.active[class] "link" => "link active"
REMOVE: nav > div:nth-of-type(2) > h4 + .link.active
INSERT: nav > div:nth-of-type(2) > h4 + .link.active
REMOVE: nav > div:nth-of-type(2) > h4 + a
INSERT: .link.active + a
```

# Update
```js
container.querySelector("button.bump").click();
```
```html
<button
  class="bump"
>
  2
</button>
<nav>
  <div>
    <h4>
      Start
    </h4>
    <a
      class="link"
    >
      Intro
    </a>
    <a
      class="link"
    >
      Setup
    </a>
  </div>
  <div>
    <h4>
      Guides
    </h4>
    <a
      class="link active"
    >
      Routing
    </a>
    <a
      class="link"
    >
      Data
    </a>
  </div>
</nav>
<p>
  <b
    class="on"
  >
    na
  </b>
  <b>
    eu
  </b>
  <b>
    apac
  </b>
</p>
```
## Change
```
UPDATE: .bump::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"params":{"path":"routing","region":"eu"},"serializedGlobals":{"params":true}}}`
```html
<button
  class="bump"
>
  2
</button>
<nav>
  <div>
    <h4>
      Start
    </h4>
    <a
      class="link"
    >
      Intro
    </a>
    <a
      class="link"
    >
      Setup
    </a>
  </div>
  <div>
    <h4>
      Guides
    </h4>
    <a
      class="link active"
    >
      Routing
    </a>
    <a
      class="link"
    >
      Data
    </a>
  </div>
</nav>
<p>
  <b>
    na
  </b>
  <b
    class="on"
  >
    eu
  </b>
  <b>
    apac
  </b>
</p>
```
## Change
```
UPDATE: p > b:nth-of-type(1)[class] "on" => null
UPDATE: .on[class] null => "on"
```
