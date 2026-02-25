# Write
```html
  <select><option></option><option value=a selected></option></select><select><option></option><option value=b></option></select><select><option></option><option value=b></option></select><!--M_*1 #select/2--><select><option></option><option value=b></option></select><!--M_*1 #select/3--><button>Update</button><!--M_*1 #button/4--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <select>
      <option />
      <option
        selected=""
        value="a"
      />
    </select>
    <select>
      <option
        selected=""
      />
      <option
        value="b"
      />
    </select>
    <select>
      <option
        selected=""
      />
      <option
        value="b"
      />
    </select>
    <!--M_*1 #select/2-->
    <select>
      <option
        selected=""
      />
      <option
        value="b"
      />
    </select>
    <!--M_*1 #select/3-->
    <button>
      Update
    </button>
    <!--M_*1 #button/4-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0]),
        "__tests__/template.marko_0 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/select0
INSERT html/body/select0/option0
INSERT html/body/select0/option1
INSERT html/body/select1
INSERT html/body/select1/option0
INSERT html/body/select1/option1
INSERT html/body/select2
INSERT html/body/select2/option0
INSERT html/body/select2/option1
INSERT html/body/#comment0
INSERT html/body/select3
INSERT html/body/select3/option0
INSERT html/body/select3/option1
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```