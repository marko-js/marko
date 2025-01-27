# Render
```html
<html>
  <head />
  <body>
    <table>
      <tbody>
        <!--M_|0 #text/0-->
      </tbody>
    </table>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
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
    <table>
      <tbody>
        <tr>
          <td>
            Hi
          </td>
        </tr>
      </tbody>
    </table>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/table/tbody/tr
REMOVE #comment after html/body/table/tbody/tr
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <table>
      <tbody>
        <!--M_|0 #text/0-->
      </tbody>
    </table>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/table/tbody/#comment
REMOVE tr after html/body/table/tbody/#comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <table>
      <tbody>
        <tr>
          <td>
            Hi
          </td>
        </tr>
      </tbody>
    </table>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{show:!1}}),0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/table/tbody/tr
REMOVE #comment after html/body/table/tbody/tr
```