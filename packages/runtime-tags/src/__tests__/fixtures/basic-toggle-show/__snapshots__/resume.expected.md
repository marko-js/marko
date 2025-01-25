# Render
```html
<html>
  <head />
  <body>
    <div>
      Hello!
      <!--M_|0 #text/0 1-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_show",0];M._.w()
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
      <!--M_|0 #text/0 1-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment0 after #text
INSERT html/body/div/#comment0
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
      <!--M_*0 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_show",0];M._.w()
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
      <!--M_|0 #text/0 1-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!0,"#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.a={}},1:_.a}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#comment0
REMOVE #text after html/body/div/#comment0
```