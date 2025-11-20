# Write
```html
  <div id=ref>0</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,{promise:(p=>p=new Promise((f,r)=>_.a={f,r(e){p.catch(_=>0);r(e)}}))()}]),_=>(_.a.f("hello"),_.c=[]),"__tests__/template.marko_0_promise 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      0
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0,
        {
          promise: (p =&gt; p = new Promise((f, r) =&gt; _.a = {
            f,
            r(e)
            {
              p.catch(_ =&gt; 0);
              r(e)
            }
          }))()
        }]), _ =&gt; (_.a.f("hello"), _.c = []),
        "__tests__/template.marko_0_promise 1"
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
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/script
INSERT html/body/script/#text
```