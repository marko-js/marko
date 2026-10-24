// components/self-box.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-api>");
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w(` ${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	handleClick() {
		this.state.count++;
	}
});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=tags-api>tags</div>");
	_dynamic_tag($scope0_id, "a", _marko_template, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>body</em>");
	}, $scope0_id), 0, 0);
}, 1);
