# Render {}
```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <!--M_*2 #option/0-->
      <option
        selected=""
        value="b"
      >
        B
      </option>
      <!--M_*2 #option/1-->
      <option
        value="c"
      >
        C
      </option>
      <!--M_*2 #option/2-->
    </select>
    <!--M_|0 #text/0 1-->
    <span>
      b
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#text/0=":3,"#text/0:":"b",value:"b","#text/0!":_.a={},"#text/0(":"select"},1:_.a}),2,"__tests__/template.marko_1",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
const select = container.querySelector(`select`);
  const window = select.ownerDocument.defaultView;
  select.value = "c";
  select.dispatchEvent(new window.Event("input", {
bubbles: true
  }))

```html
<html>
  <head />
  <body>
    <select>
      <option
        value="a"
      >
        A
      </option>
      <!--M_*2 #option/0-->
      <option
        value="b"
      >
        B
      </option>
      <!--M_*2 #option/1-->
      <option
        selected=""
        value="c"
      >
        C
      </option>
      <!--M_*2 #option/2-->
    </select>
    <!--M_|0 #text/0 1-->
    <span>
      b
      <!--M_*0 #text/1-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{"#text/0=":3,"#text/0:":"b",value:"b","#text/0!":_.a={},"#text/0(":"select"},1:_.a}),2,"__tests__/template.marko_1",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```