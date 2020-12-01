import { escapeXML as _escapeXML, toString as _toString, write as _write } from "@marko/runtime-fluurt/src/html";

_write(`<div>${_escapeXML(input.x)}Hello world &lt;a/>${_toString(input.x)}Hello world <a/><script>
    Hello &lt;b> &lt;/script>
  </script><style>
    Hello &lt;b> &lt;/style>
  </style></div>`);