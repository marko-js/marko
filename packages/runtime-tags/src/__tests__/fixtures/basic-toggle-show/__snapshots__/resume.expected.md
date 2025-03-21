# Render
```html
<html>
  <head />
  <body>
    <div>
      <!--M_[2-->
      Hello!
      <!--M_]1 #text/0-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{show:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={}},2:_.a}),1,"__tests__/template.marko_0_show"];M._.w()
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
    <div>
      <!--M_]1 #text/0-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{show:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={}},2:_.a}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment0 after #text
INSERT html/body/div/#comment0
REMOVE #comment after html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
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
      Hello!
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{show:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={}},2:_.a}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
REMOVE #comment after html/body/div/#text
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
      <!--M_]1 #text/0-->
      <button>
        Toggle
      </button>
      <!--M_*1 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{show:!0,"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={}},2:_.a}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
```