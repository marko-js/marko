// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope13_id = _scope_id();
			_html(`<p>${_text_resume($scope13_id, "a", value, $wg__input_promise)}</p>`);
			$wi__input_promise && _scope($scope13_id, {});
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		forOf([0, 1], (i) => {
			_scope_id();
			_scope_id();
			field_default({ name: "loading" });
		});
		forIn({
			a: 0,
			b: 1
		}, (i) => {
			_scope_id();
			_scope_id();
			field_default({ name: "loading" });
		});
		forTo(1, 0, 1, (i) => {
			_scope_id();
			_scope_id();
			field_default({ name: "loading" });
		});
		forUntil(2, 0, 1, (i) => {
			_scope_id();
			_scope_id();
			field_default({ name: "loading" });
		});
		forOf([0, 1], (g) => {
			_scope_id();
			forOf([0, 1], (i) => {
				_scope_id();
				field_default({ name: "nested" });
			});
		});
	}, void 0, "a1");
	$wi__input_promise && _scope($scope0_id, { e: $input_promise__closures });
}, 1);
