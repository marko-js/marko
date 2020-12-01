<${input.x} header={
  class: "my-header",

  renderBody() {
    _write("Header content");
  }

} footer={
  class: "my-footer",

  renderBody() {
    _write("Footer content");
  }

}/>
import { write as _write } from "@marko/runtime-fluurt/src/html";

_write("Body content");