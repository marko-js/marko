// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "#input/2", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope13_id = _scope_id();
			_html(`<p>${_text_resume($scope13_id, "#text/0", value, $wg__input_promise)}</p>`);
			$wi__input_promise && _scope($scope13_id, {}, "__tests__/template.marko", "1:7");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		forOf([0, 1], (i) => {
			const $scope3_id = _scope_id();
			if (true) {
				const $scope4_id = _scope_id();
				field_default({ name: "loading" });
			}
		});
		forIn({
			a: 0,
			b: 1
		}, (i) => {
			const $scope5_id = _scope_id();
			if (true) {
				const $scope6_id = _scope_id();
				field_default({ name: "loading" });
			}
		});
		forTo(1, 0, 1, (i) => {
			const $scope7_id = _scope_id();
			if (true) {
				const $scope8_id = _scope_id();
				field_default({ name: "loading" });
			}
		});
		forUntil(2, 0, 1, (i) => {
			const $scope9_id = _scope_id();
			if (true) {
				const $scope10_id = _scope_id();
				field_default({ name: "loading" });
			}
		});
		forOf([0, 1], (g) => {
			const $scope11_id = _scope_id();
			forOf([0, 1], (i) => {
				const $scope12_id = _scope_id();
				field_default({ name: "nested" });
			});
		});
	}, void 0, "__tests__/template.marko_2*content");
	$wi__input_promise && _scope($scope0_id, { "ClosureScopes:input_promise/4": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1);
