// tags/field.marko
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "ac$id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "ac$aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope13_id = _scope_id();
			_html(`<p>${_patch_text($scope13_id, "a", value, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope13_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a3" : "a4");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a4", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		forOf([0, 1], (i) => {
			_scope_id();
			{
				const $scope4_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope4_id, "a", 0);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forIn({
			a: 0,
			b: 1
		}, (i) => {
			_scope_id();
			{
				const $scope6_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope6_id, "a", 1);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forTo(1, 0, 1, (i) => {
			_scope_id();
			{
				const $scope8_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope8_id, "a", 2);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forUntil(2, 0, 1, (i) => {
			_scope_id();
			{
				const $scope10_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope10_id, "a", 3);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forOf([0, 1], (g) => {
			_scope_id();
			forOf([0, 1], (i) => {
				const $scope12_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope12_id, "a", 4);
				field_default({ name: "nested" });
				_patch_child_end();
			});
		});
	}, void 0, "a5", void 0, "a2", 1);
	_scope($scope0_id, { e: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
}, 1);
