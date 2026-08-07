// components/message.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div>${(0, import_escape_xml.x)(input.value)}</div>`);
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", _marko_template, { value: count });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: count,
		f: show
	});
	_resume_branch($scope0_id);
}, 1);
