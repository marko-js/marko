// template.marko
function getProps() {
	if (typeof window !== "undefined") throw new Error("server only");
	return { label: "server" };
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const Child = { content: _content("__tests__/template.marko_1_content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button class=child>${_escape(_hole_value($scope1_id, "PatchHole:#text/1", label, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _serialize_guard($scope1_reason, 0))} <!>${_escape(n)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"));
		_resume_branch($scope1_id);
	}) };
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "__tests__/template.marko_0/update_if_#text/0", [() => {
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id();
		Child.content(getProps());
		$sg__input_show | _persisted_reason() && writeScope($scope2_id, { "#childScope/0": _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", "10:2");
	}], ["__tests__/template.marko_2_update"], "__tests__/template.marko_r0");
	writeScope($scope0_id, {
		n: _seed_fill(_state_reason() && n),
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, { n: "6:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<!><button class=child><!> <!></button><!>", "b/ D%c%l&b"],
	"__tests__/template.marko_2_content": ["<!><button class=child><!> <!></button><!>", "b/ D%c%l&b"],
	"__tests__/template.marko_1_update": ["<button class=child><!> <!></button>", " D%c%l"],
	"__tests__/template.marko_1_content": ["<button class=child><!> <!></button>", " D%c%l"],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
