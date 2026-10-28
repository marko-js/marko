// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", 0, 0)}>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "ac$id", 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	_scope($scope0_id, {});
});

// template.marko
const $Repeat_content__walks = "b%c";
const $Repeat_content__template = "<!><!><!>";
_shells({
	a: /*@__PURE__*/ (() => `a;${((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)($Repeat_content__walks, $Repeat_content__walks)};${((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($Repeat_content__template, $Repeat_content__template)}`)(),
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_right = _write_guard($scope0_reason, 1), $wi__input_right = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_right__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.left) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			field_default({ label: "left" });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_if(() => {
		if (input.right) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope3_id, "a", 1);
			field_default({ label: "right" });
			_patch_child_end();
			_scope($scope3_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_right, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	const Repeat = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (input.right) {
				const $scope4_id = _scope_id();
				_set_scope_reason(0);
				const $childScope3 = _peek_scope_id($scope4_id, "a", 2);
				field_default({ label: "repeat" });
				_patch_child_end();
				_scope($scope4_id, { a: _existing_scope($childScope3) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_right, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
		$wi__input_right && _subscribe(_unfilled_if($scope0_reason, 1) && $input_right__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a4", $wg__input_right);
		$wg__input_right || $wi__input_right && _resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope4 = _peek_scope_id($scope0_id, "c", 3);
	Repeat.content({});
	_patch_child_end();
	const $childScope5 = _peek_scope_id($scope0_id, "d", 4);
	Repeat.content({});
	_patch_child_end();
	_scope($scope0_id, {
		i: $wi__input_right && $input_right__closures,
		c: _existing_scope($childScope4),
		d: _existing_scope($childScope5)
	});
}, 1);
