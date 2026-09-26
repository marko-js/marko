// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const promise = resolveAfter({ get bad() {
		throw new Error("getter failed");
	} }, 1);
	_script($scope0_id, "__tests__/child.marko_0_promise#0", 0);
	_scope($scope0_id, { promise }, "__tests__/child.marko", 0, { promise: "4:8" });
});

// components/class-counter.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-counter.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
s("__tests__/components/class-counter.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$Child_withLoadAssets({});
	_await($scope0_id, "#text/2", resolveAfter(1, 1), () => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", _marko_template, {}, 0, 0, 0);
	}, 0);
}, 1);
