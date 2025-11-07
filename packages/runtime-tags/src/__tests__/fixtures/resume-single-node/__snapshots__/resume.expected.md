# Render
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      a
    </div>
    <!--M_|2 #text/0-->
    <!--M_]1 #text/0 2-->
    <button>
      More
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          itemId: 0,
          items: [0],
          items_length: 1
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_itemId_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      a
    </div>
    <div>
      b
    </div>
    <div>
      a
    </div>
    <div>
      b
    </div>
    <!---->
    <!--M_]1 #text/0 2-->
    <button>
      More
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          itemId: 0,
          items: [0],
          items_length: 1
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_itemId_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div2, #text, html/body/#comment1
INSERT html/body/div1
REMOVE #comment after html/body/div1
INSERT html/body/div3
REMOVE #text after html/body/div3
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[-->
    <div>
      a
    </div>
    <div>
      b
    </div>
    <div>
      a
    </div>
    <div>
      b
    </div>
    <!---->
    <div>
      a
    </div>
    <div>
      b
    </div>
    <!---->
    <!--M_]1 #text/0 2-->
    <button>
      More
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          itemId: 0,
          items: [0],
          items_length: 1
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_itemId_items",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div4, #text, html/body/#comment2
INSERT html/body/div5
REMOVE #text after html/body/div5
```