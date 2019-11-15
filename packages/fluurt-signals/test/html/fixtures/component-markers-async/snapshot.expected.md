# write
  <!M$0>xyz<!M$0/><!M$1>a<script>[{"markerId":0,"componentId":"component-markers-async","input":{}}]</script>
_flush_

# write
  b
_flush_

# write
  c<!M$1/><script>[{"markerId":1,"componentId":"component-markers-async","input":{}}]</script>
_flush_

# end

# final HTML
  <!--M$0-->
  <html>
    <head />
    <body>
      xyz
      <!--M$0/-->
      <!--M$1-->
      a
      <script>
        [{"markerId":0,"componentId":"component-markers-async","input":{}}]
      </script>
      bc
      <!--M$1/-->
      <script>
        [{"markerId":1,"componentId":"component-markers-async","input":{}}]
      </script>
    </body>
  </html>
