const _marko_template = _t();

export default _marko_template;
import _marko_createElement from "marko/src/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", null, "1" + _keyScope, null, 0, 0);

const _marko_node2 = _marko_createElement("div", null, "2" + _keyScope, null, 0, 0);

const _marko_node3 = _marko_createElement("div", null, "4" + _keyScope2, null, 0, 0);

const _marko_node4 = _marko_createElement("div", null, "5" + _keyScope2, null, 0, 0);

const _marko_node5 = _marko_createElement("div", null, "7" + _keyScope3, null, 0, 0);

const _marko_node6 = _marko_createElement("div", null, "8" + _keyScope3, null, 0, 0);

const _marko_node7 = _marko_createElement("div", null, "9" + _keyScope4, null, 0, 0);

const _marko_node8 = _marko_createElement("div", null, "10" + _keyScope5, null, 0, 0);

const _marko_node9 = _marko_createElement("div", null, "11" + _keyScope6, null, 0, 0);

const _marko_node10 = _marko_createElement("div", null, "12" + _keyScope7, null, 0, 0);

const _marko_node11 = _marko_createElement("div", null, "13" + _keyScope8, null, 0, 0);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/for-tag/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  let _i = 0;

  for (const val of arr) {
    let i = _i++;
    const _keyScope = `[${i}]`;
    out.be("div", null, "0" + _keyScope, component, null, 0);
    out.t(i, component);
    out.t(": ", component);
    out.t(val, component);
    out.ee();
    out.n(_marko_node, component);
    out.n(_marko_node2, component);
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyScope2 = `[${key}]`;
    out.be("div", null, "3" + _keyScope2, component, null, 0);
    out.t(key, component);
    out.t(": ", component);
    out.t(val, component);
    out.ee();
    out.n(_marko_node3, component);
    out.n(_marko_node4, component);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;
    const _keyScope3 = `[${i}]`;
    out.be("div", null, "6" + _keyScope3, component, null, 0);
    out.t(i, component);
    out.ee();
    out.n(_marko_node5, component);
    out.n(_marko_node6, component);
  }

  let _i2 = 0;

  for (const val of arr) {
    let i = _i2++;
    const _keyValue = `@${i}`,
          _keyScope4 = `[${_keyValue}]`;
    out.be("div", null, _keyValue, component, null, 0);
    out.t(i, component);
    out.t(": ", component);
    out.t(val, component);
    out.ee();
    out.n(_marko_node7, component);
    out.e("div", null, `@other-${i}`, component, 0, 0);
  }

  let _i3 = 0;
  const list = arr;

  for (const val of list) {
    let i = _i3++;
    const _keyValue2 = `@${i}`;
    out.be("div", null, _keyValue2, component, null, 0);
    out.t(list.length, component);
    out.t(": ", component);
    out.t(val, component);
    out.ee();
  }

  for (const key in obj) {
    const val = obj[key];
    const _keyValue3 = `@${key}`,
          _keyScope5 = `[${_keyValue3}]`;
    out.be("div", null, _keyValue3, component, null, 0);
    out.t(key, component);
    out.t(": ", component);
    out.t(val, component);
    out.ee();
    out.n(_marko_node8, component);
    out.e("div", null, `@other-${key}`, component, 0, 0);
  }

  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;
    const _keyValue4 = `@${i}`,
          _keyScope6 = `[${_keyValue4}]`;
    out.be("div", null, _keyValue4, component, null, 0);
    out.t(i, component);
    out.ee();
    out.n(_marko_node9, component);
    out.e("div", null, `@other-${i}`, component, 0, 0);

    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;
      const _keyValue5 = `@${i}`,
            _keyScope7 = `[${_keyValue5}]`;
      out.be("div", null, _keyValue5, component, null, 0);
      out.t(i, component);
      out.ee();
      out.n(_marko_node10, component);
      out.e("div", null, `@other-${i}`, component, 0, 0);
    }
  }

  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;
    const _keyValue6 = `@${i}`,
          _keyScope8 = `[${_keyValue6}]`;
    out.be("div", null, _keyValue6, component, null, 0);
    out.t(i, component);
    out.ee();
    out.n(_marko_node11, component);
    out.e("div", null, `@other-${i}`, component, 0, 0);
  }

  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {
    out.t("Hello", component);
  }

  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {
    out.t("Hello", component);
  }
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);