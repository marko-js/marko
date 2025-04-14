# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <button>
      <span
        id="count"
      >
        0
      </span>
      <!--M_=1 #button/0 2-->
    </button>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{}]),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      <span
        id="count"
      >
        1
      </span>
      <!--M_=1 #button/0 2-->
    </button>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{}]),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/button/span
INSERT html/body/button/span/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      <span
        id="count"
      >
        2
      </span>
      <!--M_=1 #button/0 2-->
    </button>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{}]),"__tests__/template.marko_0",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/button/span
INSERT html/body/button/span/#text
```