// components/async-class.marko
var import_html = require_html();
var import_attr = /* @__PURE__ */ __toESM(require_attr());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/async-class.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div${(0, import_attr.default)("id", input.id)}>`);
	{
		const async = out.beginAsync();
		Promise.resolve().then(() => {
			async.write("done");
			async.end();
		});
	}
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", _marko_template, { id: "a" }, 0, 0, 0);
			_dynamic_tag($scope1_id, "#text/1", _marko_template, { id: "b" }, 0, 0, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
