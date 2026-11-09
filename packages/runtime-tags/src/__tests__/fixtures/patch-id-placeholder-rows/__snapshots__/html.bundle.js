// tags/field.marko
const $setup = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_uid = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", $scope0_reason, 0)}>${_text_mark($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_mark($scope0_id, "a", $uf__input_uid)}<input${_attr("id", uid, $scope0_id, "c", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "c", $scope0_reason, 2)}>${_el_mark($scope0_id, "c", $uf__input_uid || _updates_from($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])}`,
	a: "a; b%;<h1>Fields</h1><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id("A");
	_html(`<h1${_attr("id", heading, $scope0_id, "a", 0, 0)}>Fields</h1>${_el_mark($scope0_id, "a", 0)}`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_promise__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope4_id = _scope_id(), $ui__input_rows = _unfilled_if($scope0_reason, 0);
			_await($scope4_id, "a", row.promise, (v) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_text_mark($scope5_id, "a", v, 1, $scope0_reason, 0)}</p>`);
				_scope($scope5_id, {});
			}, 1, "a0", $ui__input_rows && 2);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope4_id, "a5", 1);
			$wi__input_rows && _subscribe($ui__input_rows && $for_content__row_promise__closures, _scope($scope4_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
			$wi__input_rows && _resume_branch($scope4_id);
		}, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(0);
			field_default({
				name: row.key,
				heading
			});
			_patch_child_end();
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, (error) => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _peek_scope_id($scope3_id, "a", 1);
			field_default({
				name: error.message,
				heading
			});
			_patch_child_end();
			_scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			});
		}, "a6", "a3", "a2", 0, 1, 1);
		_scope($scope1_id, {
			M: row?.key,
			_: _scope_with_id($scope0_id),
			h: $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures
		});
	}, "key", $scope0_id, "b", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_scope($scope0_id, { f: heading });
}, 1);
