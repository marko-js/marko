// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 1;
	const Child = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button class=child>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
		_resume_branch($scope1_id);
	}) };
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "__tests__/template.marko_0/update_if_#text/0", [() => {
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id();
		Child.content({});
		$sg__input_show | _persisted_reason() && writeScope($scope2_id, { "#childScope/0": _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", "5:2");
	}], ["__tests__/template.marko_2_update"], "__tests__/template.marko_r0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<!><button class=child> </button><!>", "b/ D l&b"],
	"__tests__/template.marko_2_content": ["<!><button class=child> </button><!>", "b/ D l&b"],
	"__tests__/template.marko_1_update": ["<button class=child> </button>", " D l"],
	"__tests__/template.marko_1_content": ["<button class=child> </button>", " D l"],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
