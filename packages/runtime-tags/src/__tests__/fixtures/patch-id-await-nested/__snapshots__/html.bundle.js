// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "ac$id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "ac$aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_inner__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", item.outer, (outer) => {
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", item.inner, (inner) => {
				const $scope3_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
				const $childScope = _peek_scope_id($scope3_id, "a", 0);
				field_default({ name: inner });
				_patch_child_end();
				_scope($scope3_id, { a: _existing_scope($childScope) });
			}, 1, "a0", _unfilled_if($scope0_reason, 0));
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "a5" : "a6");
			$wi__input_items && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_inner__closures, _scope($scope2_id, {}), $cg__input_items && "a6", 0);
			$wi__input_items && _resume_branch($scope2_id);
		}, 1, "a2", _unfilled_if($scope0_reason, 0));
		$wi__input_items && _scope($scope1_id, { f: _unfilled_if($scope0_reason, 0) && $for_content__item_inner__closures });
	}, "key", $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
