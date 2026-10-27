// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", 0, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "#input/2", 0, 0)}${_attr("aria-describedby", input.headingId, $scope0_id, "#input/2", $scope0_reason, 1)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 1))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h2>Fields</h2><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; b%;<h2>Fields</h2><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_visible__OR__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const headingId = _id("headingId");
	_html(`<h2${_attr("id", headingId, $scope0_id, "#h2/0", 0, 0)}>Fields</h2>${_el_resume($scope0_id, "#h2/0", 0)}`);
	_if(() => {
		if (input.visible !== false) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
				field_default({
					name: item.key,
					headingId
				});
				_patch_child_end();
				_set_scope_reason(0);
				const $childScope2 = _patch_child($scope2_id, "#childScope/1", 1);
				field_default({
					name: item.key,
					headingId
				});
				_patch_child_end();
				_scope($scope2_id, {
					_: $wi__input_visible__OR__input_items && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope),
					"#childScope/1": _existing_scope($childScope2)
				}, "__tests__/template.marko", "4:4");
			}, "key", $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:5/init");
			_scope($scope1_id, { _: $wi__input_visible__OR__input_items && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.items,
		headingId: _unfilled_if($scope0_reason, 0) && headingId
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		headingId: "1:5"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 2));
}, 1);
