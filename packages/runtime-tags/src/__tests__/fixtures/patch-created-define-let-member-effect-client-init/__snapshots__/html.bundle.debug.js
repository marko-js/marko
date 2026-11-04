// template.marko
const $Child_content__walks = " b";
const $Child_content__template = "<div></div>";
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button class=inc> </button><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:6/setup;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Child_content__walks)};${$Child_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	const Child = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let value = input.data;
		_html(`<div></div>${_el_mark($scope2_id, "#div/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_value_b#5");
		_scope($scope2_id, { value_b: value?.b }, "__tests__/template.marko", "3:2", { value_b: ["value.b", "4:8"] });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Child.content({ data: { b: count } });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
