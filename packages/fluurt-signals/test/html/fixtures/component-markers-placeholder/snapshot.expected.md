# write
  <!M$0>a<!M$1>e...<!M$1/>e
_flush_

# write
  fg<!M$0/><!M$2>v<!M$3>z...<!M$3/>z<!M$2/><script>[{"markerId":2,"componentId":"component-markers-placeholder","input":{}}]</script>
_flush_

# write
  <t id="M$1">bcd</t><script>(M$r=REORDER_RUNTIME)(1)</script><script>[{"markerId":0,"componentId":"component-markers-placeholder","input":{}}]</script>
_flush_

# write
  <t id="M$3">wxy</t><script>M$r(3)</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      abcdefg
      <!--M$0/-->
      <!--M$2-->
      vwxyz
      <!--M$2/-->
      <script>
        [{"markerId":2,"componentId":"component-markers-placeholder","input":{}}]
      </script>
      <script>
        [{"markerId":0,"componentId":"component-markers-placeholder","input":{}}]
      </script>
    </body>
  </html>
