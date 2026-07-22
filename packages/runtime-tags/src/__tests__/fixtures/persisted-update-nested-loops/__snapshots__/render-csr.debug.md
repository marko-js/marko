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
document.querySelector("button.bump").click();
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

# Update `{"$global":{"persisted":true,"params":{"path":"routing","region":"na"},"serializedGlobals":{"params":true}}}`

# Update
```js
document.querySelector("button.bump").click();
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
UPDATE: .bump::text "1" => "2"
```

# Update `{"$global":{"persisted":true,"params":{"path":"routing","region":"eu"},"serializedGlobals":{"params":true}}}`

# Update `{"$global":{"persisted":true,"params":{"path":"routing","region":"eu"},"serializedGlobals":{"params":true}}}`
