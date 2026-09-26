// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter({ get bad() {
		throw new Error("getter failed");
	} }, 1);
	_script($scope0_id, "a0", 0);
	_scope($scope0_id, { a: promise });
});

// components/class-counter.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "c", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
s("c", _marko_template);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
	_await($scope0_id, "c", resolveAfter(1, 1), () => {
		_dynamic_tag(_scope_id(), "a", _marko_template, {}, 0, 0, 0);
	}, 0);
}, 1);
