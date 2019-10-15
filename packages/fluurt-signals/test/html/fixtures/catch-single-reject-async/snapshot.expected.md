# write
  a<!M$0>b
_flush_

# write
  d<!M$0/>efg
_flush_

# write
  <t id="M$0">ERROR!</t><script>(M$r=REORDER_RUNTIME)(0)</script>
_flush_

# end

# final HTML
  <html>
    <head />
    <body>
      aERROR!efg
    </body>
  </html>
