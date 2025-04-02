export const _template = `<!>${_list_template}<!>`;
export const _walks = /* beginChild, _list_walks, endChild */`D/${_list_walks}&D`;
import { _setup as _list, _input_item as _list_input_item, _template as _list_template, _walks as _list_walks } from "./tags/list/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _item_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "Again");
const _item_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
export function _setup(_scope) {
  _list(_scope["#childScope/0"]);
  _list_input_item(_scope["#childScope/0"], (_$.attrTags(_$.attrTag({
    content: _item_content(_scope)
  }), {
    content: _item_content2(_scope)
  })));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);