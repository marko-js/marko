// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_if(() => input.show ? 0 : undefined, $scope0_id, "#text/0", 1 | _persisted_reason(), $sg__input_show, $sg__input_show, 0, 1, "__tests__/template.marko_0/update_if_#text/0", [() => {
		const $scope1_id = _scope_id();
		_html(`<button class=child>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<button class=child> </button>", " D l"],
	"__tests__/template.marko_1_content": ["<button class=child> </button>", " D l"],
	"__tests__/template.marko_0_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko": ["<!><!><!>", "b%c"]
});
