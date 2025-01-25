# Render {}
```html
<html>
  <head />
  <body>
    <!--M_[1-->
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
    <!--M_]0 #text/0-->
    <span>
      b
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{value:"b","#text/0!":_.a={"#select/0=":3,"#select/0:":"b"},"#text/0(":"select"},1:_.a}),2,"__tests__/template.marko_1",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment0 before #document/html0
inserted #document/html0/body1/#comment0
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
    <!--M_[1-->
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
    <!--M_]0 #text/0-->
    <span>
      b
      <!--M_*0 #text/1-->
    </span>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:{value:"b","#text/0!":_.a={"#select/0=":3,"#select/0:":"b"},"#text/0(":"select"},1:_.a}),2,"__tests__/template.marko_1",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```