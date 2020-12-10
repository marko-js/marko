const MyTag = input => _write(`Hello ${_escapeXML(input.name)}`);

MyTag({
  name: "World"
});
import { escapeXML as _escapeXML, write as _write } from "@marko/runtime-fluurt/src/html";