# Write
```html
  <!--M_[--><div>a</div><!--M_|2 #text/0--><!--M_]1 #text/0 2--><button>More</button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={itemId:0,items:[0],items_length:1},{_:_.a}]),"__tests__/template.marko_0_itemId_items 1"];M._.w()</script>
```

# Render End
```html
<!--M_[-->
<html>
  <head />
  <body>
    <div>
      a
    </div>
    <!--M_|2 #text/0-->
    <!--M_]1 #text/0 2-->
    <button>
      More
    </button>
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          itemId: 0,
          items: [0],
          items_length: 1
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_itemId_items 1"
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```