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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{selected:!1,"#childScope/0":_.a={"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.a,3:_.b}),1,"__tests__/template.marko_0_selected"];M._.w()
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{selected:!1,"#childScope/0":_.a={"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.a,3:_.b}),1,"__tests__/template.marko_0_selected"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "selected"
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{selected:!1,"#childScope/0":_.a={"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.a,3:_.b}),1,"__tests__/template.marko_0_selected"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] "selected" => null
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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:{selected:!1,"#childScope/0":_.a={"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#text/1":"__tests__/template.marko_1_renderer"}},2:_.a,3:_.b}),1,"__tests__/template.marko_0_selected"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div[class] null => "selected"
```