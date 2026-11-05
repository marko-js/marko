// components/async-class.marko
var import_html = require_html();
var import_attr = /* @__PURE__ */ __toESM(require_attr());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
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
	i: true
}, {});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", _marko_template, { id: "a" }, 0, 0, 0);
			_dynamic_tag($scope1_id, "b", _marko_template, { id: "b" }, 0, 0, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
