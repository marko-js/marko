// template.marko
const $Child_content__walks = " b";
const $Child_content__template = "<div></div>";
_shells({
	a: "a !a3; D l%;<button class=inc> </button><!><!>",
	a2: `a2 a5;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Child_content__walks)};${$Child_content__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=inc>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const Child = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let value = input.data;
		_html(`<div></div>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a1");
		_scope($scope2_id, { f: value?.b });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Child.content({ data: { b: count } });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	_script($scope0_id, "a3");
	_scope($scope0_id, { g: count });
}, 1);
