// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a1: "a1;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))}`)(),
	a3: "a3;b%;<!><!><!>",
	a4: /*@__PURE__*/ (() => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template)}`)(),
	a: "a; b%;<h1>Fields</h1><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "a", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "a", 0)}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _patch_child($scope1_id, "a", 2);
		field_default({
			name: "before",
			heading
		});
		_patch_child_end();
		_await($scope1_id, "b", input.promise, (items) => {
			const $scope4_id = _scope_id();
			_for_of(items, (item) => {
				const $scope5_id = _scope_id();
				_set_scope_reason(0);
				const $childScope3 = _patch_child($scope5_id, "a", 3);
				field_default({
					name: item.key,
					heading
				});
				_patch_child_end();
				_scope($scope5_id, {
					_: $wi__input_promise && _scope_with_id($scope4_id),
					a: _existing_scope($childScope3)
				});
			}, "key", $scope4_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 0);
			_scope($scope4_id, {});
		}, 1, "a1", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a5" : "a6");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: $wi__input_promise && _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		}), $cg__input_promise && "a6");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		_patch_child($scope2_id, "a", 0);
		field_default({
			name: "loading",
			heading
		});
		_patch_child_end();
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope2_id);
	}, (error) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(16);
		const $childScope = _patch_child($scope3_id, "a", 1);
		field_default({
			name: error.message,
			heading
		});
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "a7", "a2", "a4", 1, 1, 1);
	_scope($scope0_id, {
		f: heading,
		g: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	});
}, 1);
