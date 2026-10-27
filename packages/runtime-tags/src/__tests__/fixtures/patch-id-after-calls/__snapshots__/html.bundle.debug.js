// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "PatchAttr:#input/2 aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<!><!><input><label>after child</label><!><input><label>after tag</label>";
const $walks = "b%b b b%b b b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%b b b%b b ;<!><!><input><label>after child</label><!><input><label>after tag</label>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			field_default({ name: "child" });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const afterChild = _id("afterChild");
	_html(`<input${_patch_attr($scope0_id, "PatchAttr:#input/1 id", "id", afterChild, 0, 0)}>${_el_resume($scope0_id, "#input/1", 0)}<label${_patch_attr($scope0_id, "PatchAttr:#label/2 for", "for", afterChild, 0, 0)}>after child</label>${_el_resume($scope0_id, "#label/2", 0)}`);
	_dynamic_tag($scope0_id, "#text/3", input.show ? field_default : null, { name: "dynamic" }, 9, 0, 0, $wg__input_show, $scope0_reason, 0);
	const afterTag = _id("afterTag");
	_html(`<input${_patch_attr($scope0_id, "PatchAttr:#input/4 id", "id", afterTag, 0, 0)}>${_el_resume($scope0_id, "#input/4", 0)}<label${_patch_attr($scope0_id, "PatchAttr:#label/5 for", "for", afterTag, 0, 0)}>after tag</label>${_el_resume($scope0_id, "#label/5", 0)}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
