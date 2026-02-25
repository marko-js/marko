# Render
```html
<html>
  <head />
  <body>
    <textarea>
      a
    </textarea>
    <textarea>
      a
    </textarea>
    <textarea>
      a
    </textarea>
    <!--M_*1 #textarea/2-->
    <textarea>
      a
    </textarea>
    <!--M_*1 #textarea/3-->
    <textarea>
      a
    </textarea>
    <!--M_*1 #textarea/4-->
    <textarea>
      a
    </textarea>
    <!--M_*1 #textarea/5-->
    <button>
      Update
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
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
    <textarea>
      a
    </textarea>
    <textarea>
      a
    </textarea>
    <textarea
      default-value="b"
    >
      a
    </textarea>
    <!--M_*1 #textarea/2-->
    <textarea
      default-value="b"
    >
      a
    </textarea>
    <!--M_*1 #textarea/3-->
    <textarea
      default-value="b"
    >
      a
    </textarea>
    <!--M_*1 #textarea/4-->
    <textarea
      default-value="b"
    >
      a
    </textarea>
    <!--M_*1 #textarea/5-->
    <button>
      Update
    </button>
    <!--M_*1 #button/6-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/textarea2
INSERT html/body/textarea2/#text
REMOVE #text in html/body/textarea3
INSERT html/body/textarea3/#text
REMOVE #text in html/body/textarea4
INSERT html/body/textarea4/#text
REMOVE #text in html/body/textarea5
INSERT html/body/textarea5/#text
```