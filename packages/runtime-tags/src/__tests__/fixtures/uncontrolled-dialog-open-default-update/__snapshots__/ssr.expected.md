# Write
```html
  <dialog></dialog><dialog></dialog><!--M_*1 #dialog/0--><dialog></dialog><!--M_*1 #dialog/1--><button>Update</button><!--M_*1 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0]),"__tests__/template.marko_0 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <dialog />
    <dialog />
    <!--M_*1 #dialog/0-->
    <dialog />
    <!--M_*1 #dialog/1-->
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
INSERT html/body/dialog0
INSERT html/body/dialog1
INSERT html/body/#comment0
INSERT html/body/dialog2
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```