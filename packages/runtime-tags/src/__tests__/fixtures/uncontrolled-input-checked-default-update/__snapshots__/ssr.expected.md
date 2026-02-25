# Write
```html
  <input type=checkbox><input type=checkbox><!--M_*1 #input/0--><input type=checkbox><!--M_*1 #input/1--><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <input
      type="checkbox"
    />
    <input
      type="checkbox"
    />
    <!--M_*1 #input/0-->
    <input
      type="checkbox"
    />
    <!--M_*1 #input/1-->
    <button>
      Update
    </button>
    <!--M_*1 #button/2-->
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
INSERT html/body/input0
INSERT html/body/input1
INSERT html/body/#comment0
INSERT html/body/input2
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```