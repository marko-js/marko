// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;b%;<!><!><!>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	a: "a; b%;<h1>Fields</h1><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "a", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "a", 0)}`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_promise__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", row.promise, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_patch_text($scope4_id, "a", v, void 0, $scope0_reason, 0)}</p>`);
				_scope($scope4_id, {});
			}, 1, "a0");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_rows ? "a5" : "a6");
			$wi__input_rows && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), $cg__input_rows && "a6", 0);
			$wi__input_rows && _resume_branch($scope3_id);
		}, void 0, (error) => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _patch_child($scope2_id, "a", 0);
			field_default({
				name: error.message,
				heading
			});
			_patch_child_end();
			_scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			});
		}, void 0, "a3", "a2", void 0, 1, 1);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures
		});
	}, "key", $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a4", $scope0_reason, 0);
	_scope($scope0_id, { f: heading });
}, 1);
