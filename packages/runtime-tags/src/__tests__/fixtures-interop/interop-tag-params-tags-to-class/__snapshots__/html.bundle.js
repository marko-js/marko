// components/class-layout.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button><div>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, [state.count, "hello"], null, _componentDef, "2");
	out.w("</div>");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $multiplier__closures = /* @__PURE__ */ new Set();
	let multiplier = 1;
	_dynamic_tag($scope0_id, "a", _marko_template, {}, _content_resume("a0", (baseCount, message) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__baseCount = _serialize_guard($scope1_reason, 0);
		_html(`<h1>${_escape(message)}${_el_resume($scope1_id, "a", _serialize_guard($scope1_reason, 1))}</h1><button id=tags>${_escape(multiplier)}${_el_resume($scope1_id, "c")} * ${_sep($sg__baseCount)}${_escape(baseCount)}${_el_resume($scope1_id, "d", $sg__baseCount)} = <!>${_escape(multiplier * baseCount)}${_el_resume($scope1_id, "e")}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a1");
		_subscribe($multiplier__closures, writeScope($scope1_id, {
			g: baseCount,
			_: _scope_with_id($scope0_id)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, 0);
	writeScope($scope0_id, {
		b: multiplier,
		Bb: $multiplier__closures
	});
	_resume_branch($scope0_id);
}, 1);
