# Render
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      <!--M_[-->
      body content
      <!--M_]2 #span/0 3-->
    </span>
    <!--M_'1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
        "ConditionalScope:#text/0": _.b = {
          "EventAttributes:#span/0": _.a = {},
          "ConditionalScope:#span/0": _.c = {},
          "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content",
          "#Renderer": "span"
        },
        "ConditionalRenderer:#text/0": "span",
        tagName: "span"
      }, _.b, _.c], _.a.click = _._[
        "__tests__/template.marko_0/onClick"
        ](_.e), _.d), "_dynamicTagScript", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span/#text1
```

# Render
```js
container.querySelector(".A").click();
```
```html
<html>
  <head />
  <body>
    <div
      class="A"
    >
      body content
    </div>
    <!--M_'1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
        "ConditionalScope:#text/0": _.b = {
          "EventAttributes:#span/0": _.a = {},
          "ConditionalScope:#span/0": _.c = {},
          "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content",
          "#Renderer": "span"
        },
        "ConditionalRenderer:#text/0": "span",
        tagName: "span"
      }, _.b, _.c], _.a.click = _._[
        "__tests__/template.marko_0/onClick"
        ](_.e), _.d), "_dynamicTagScript", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div
REMOVE span after html/body/div
INSERT html/body/div/#text
UPDATE html/body/div[class] null => "A"
```

# Render
```js
container.querySelector(".A").click();
```
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      body content
    </span>
    <!--M_'1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.d = [0, _.e = {
        "ConditionalScope:#text/0": _.b = {
          "EventAttributes:#span/0": _.a = {},
          "ConditionalScope:#span/0": _.c = {},
          "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content",
          "#Renderer": "span"
        },
        "ConditionalRenderer:#text/0": "span",
        tagName: "span"
      }, _.b, _.c], _.a.click = _._[
        "__tests__/template.marko_0/onClick"
        ](_.e), _.d), "_dynamicTagScript", 2];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/span
REMOVE div after html/body/span
INSERT html/body/span/#text
UPDATE html/body/span[class] null => "A"
```