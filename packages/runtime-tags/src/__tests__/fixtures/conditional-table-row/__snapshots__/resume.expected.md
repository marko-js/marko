# Render
```html
<html>
  <head />
  <body>
    <table>
      <tbody>
        <!--M_=1 #tbody/0-->
      </tbody>
    </table>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show"];M._.w()
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
        <!--M_=1 #tbody/0-->
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
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/table/tbody/tr
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
      <tbody />
    </table>
    <button>
      Toggle
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #comment, tr in html/body/table/tbody
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
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={1:{show:!1}}),1,"__tests__/template.marko_0_show"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/table/tbody/tr
```