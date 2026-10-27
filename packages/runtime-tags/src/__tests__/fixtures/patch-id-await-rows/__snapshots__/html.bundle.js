// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "ac$id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "ac$aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a", 0);
		field_default({ name: "before" });
		_patch_child_end();
		_await($scope1_id, "b", item.promise, (value) => {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
			const $childScope2 = _patch_child($scope2_id, "a", 1);
			field_default({ name: value });
			_patch_child_end();
			$scope0_page && _scope($scope2_id, { a: _existing_scope($childScope2) });
		}, 1, "a0");
		$scope0_page && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1);
