# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[3-->
      <span>
        The thing
      </span>
      <!--M_]2 #text/1-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"selected/2":!1,"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/template.marko_0_selected",0];M._.w()
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
    <div
      class="selected"
    >
      <span>
        The thing
      </span>
      <!--M_]2 #text/1-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"selected/2":!1,"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/template.marko_0_selected",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "selected"
INSERT html/body/div/span
REMOVE #comment after html/body/div/span
REMOVE span after html/body/div/span
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <span>
        The thing
      </span>
      <!--M_]2 #text/1-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"selected/2":!1,"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/template.marko_0_selected",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] "selected" => null
INSERT html/body/div/span
REMOVE span after html/body/div/span
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div
      class="selected"
    >
      <span>
        The thing
      </span>
      <!--M_]2 #text/1-->
    </div>
    <!--M_*2 #div/0-->
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={"selected/2":!1,"#childScope/0":_.b={"#text/1!":_.c={}}},2:_.b,3:_.c},_.b["#text/1("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/template.marko_0_selected",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "selected"
INSERT html/body/div/span
REMOVE span after html/body/div/span
```