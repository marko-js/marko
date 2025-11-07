# Render
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <ul
      class="attached"
    >
      <li>
        0
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*3 #text/0-->
      </li>
      <!--M_}1 #ul/1 3 2-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          items: [0, 1]
        },
        {},
        {}]),
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul[class] null => "attached"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <ul
      class="attached"
    >
      <li>
        0
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*3 #text/0-->
      </li>
      <!--M_}1 #ul/1 3 2-->
      <li>
        2
      </li>
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          items: [0, 1]
        },
        {},
        {}]),
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/ul/li2
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <ul
      class="attached"
    >
      <li>
        0
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*3 #text/0-->
      </li>
      <!--M_}1 #ul/1 3 2-->
      <li>
        2
      </li>
      <li>
        3
      </li>
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          items: [0, 1]
        },
        {},
        {}]),
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/ul/li3
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button />
    <!--M_*1 #button/0-->
    <ul
      class="attached"
    >
      <li>
        0
        <!--M_*2 #text/0-->
      </li>
      <li>
        1
        <!--M_*3 #text/0-->
      </li>
      <!--M_}1 #ul/1 3 2-->
      <li>
        2
      </li>
      <li>
        3
      </li>
      <li>
        4
      </li>
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          items: [0, 1]
        },
        {},
        {}]),
        "__tests__/template.marko_0",
        1,
        "__tests__/template.marko_0_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/ul/li4
```