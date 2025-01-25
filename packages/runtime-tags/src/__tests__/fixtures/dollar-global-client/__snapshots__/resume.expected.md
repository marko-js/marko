# Render `{"$global":{"x":1,"serializedGlobals":["x"]}}`

```html
<html>
  <head />
  <body>
    <div>
      <!--M_|0 #text/0-->
      <span
        class="hidden"
      >
        1
      </span>
      <!--M_|0 #text/1 2-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!1,"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.a={}},2:_.a,$:{x:1}}),0,"__tests__/template.marko_0_show",0];M._.w()
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
      <span>
        1
      </span>
      <!--M_|0 #text/1 2-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!1,"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.a={}},2:_.a,$:{x:1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/span
REMOVE #comment after html/body/div/span
REMOVE html/body/div/#comment0 after span
INSERT html/body/div/#comment0
REMOVE span after html/body/div/#comment0
UPDATE html/body/div/span/#text " " => "1"
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
      <!--M_|0 #text/0-->
      <span
        class="hidden"
      >
        1
      </span>
      <button>
        Toggle
      </button>
      <!--M_*0 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!1,"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.a={}},2:_.a,$:{x:1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#comment0
REMOVE span after html/body/div/#comment0
INSERT html/body/div/span
REMOVE #comment after html/body/div/span
UPDATE html/body/div/span/#text " " => "1"
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
        1
      </span>
      <!--M_|0 #text/1 2-->
      <button>
        Toggle
      </button>
      <!--M_*0 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{show:!1,"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.a={}},2:_.a,$:{x:1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/span
REMOVE #comment after html/body/div/span
INSERT html/body/div/#comment0
REMOVE span after html/body/div/#comment0
UPDATE html/body/div/span/#text " " => "1"
```