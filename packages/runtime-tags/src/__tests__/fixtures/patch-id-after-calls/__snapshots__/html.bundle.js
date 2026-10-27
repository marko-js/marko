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
	a: "a;b%b b b%b b ;<!><!><input><label>after child</label><!><input><label>after tag</label>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", 0);
			field_default({ name: "child" });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	const afterChild = _id("A");
	_html(`<input${_patch_attr($scope0_id, "ab$id", "id", afterChild, 0, 0)}>${_el_resume($scope0_id, "b", 0)}<label${_patch_attr($scope0_id, "ac$for", "for", afterChild, 0, 0)}>after child</label>${_el_resume($scope0_id, "c", 0)}`);
	_dynamic_tag($scope0_id, "d", input.show ? field_default : null, { name: "dynamic" }, 9, 0, 0, $wg__input_show, $scope0_reason, 0);
	const afterTag = _id("B");
	_html(`<input${_patch_attr($scope0_id, "ae$id", "id", afterTag, 0, 0)}>${_el_resume($scope0_id, "e", 0)}<label${_patch_attr($scope0_id, "af$for", "for", afterTag, 0, 0)}>after tag</label>${_el_resume($scope0_id, "f", 0)}`);
	$scope0_page && _scope($scope0_id, {});
}, 1);
