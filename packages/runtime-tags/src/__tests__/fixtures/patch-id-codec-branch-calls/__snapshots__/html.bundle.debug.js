// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", 0, 0)}>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $Repeat_content__walks = "b%c";
const $Repeat_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($Repeat_content__template, $Repeat_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)($Repeat_content__walks, $Repeat_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)($Repeat_content__walks, $Repeat_content__walks)};${((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($Repeat_content__template, $Repeat_content__template)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_4*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_right = _write_guard($scope0_reason, 1), $wi__input_right = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_right__closures = new Set();
	_if(() => {
		if (input.left) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			field_default({ label: "left" });
			_patch_child_end();
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	_if(() => {
		if (input.right) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope3_id, "#childScope/0", 1);
			field_default({ label: "right" });
			_patch_child_end();
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_right, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 1);
	const Repeat = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.right) {
				const $scope4_id = _scope_id();
				_set_scope_reason(0);
				const $childScope3 = _peek_scope_id($scope4_id, "#childScope/0", 2);
				field_default({ label: "repeat" });
				_patch_child_end();
				_scope($scope4_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "3:17");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_right, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 1);
		$wi__input_right && _subscribe(_unfilled_if($scope0_reason, 1) && $input_right__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_right#0:7/subscribe", $wg__input_right);
		$wg__input_right || $wi__input_right && _resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope4 = _peek_scope_id($scope0_id, "#childScope/2", 3);
	Repeat.content({});
	_patch_child_end();
	const $childScope5 = _peek_scope_id($scope0_id, "#childScope/3", 4);
	Repeat.content({});
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_right/8": $wi__input_right && $input_right__closures,
		"#childScope/2": _existing_scope($childScope4),
		"#childScope/3": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0);
}, 1);
