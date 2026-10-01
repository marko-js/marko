// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_text_resume($scope4_id, "a", (console.log("body-ran:a", v), v), $wg__input_a * 2)}</p>`);
			$wi__input_a && _scope($scope4_id, {});
		}, $wg__input_a);
		$wi__input_a && _subscribe($input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("caught-a");
	}, void 0, "a1");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.b, (v) => {
			const $scope6_id = _scope_id();
			_html(`<p>B:${_text_resume($scope6_id, "a", (console.log("body-ran:b", v), v), $wg__input_b * 2)}</p>`);
			$wi__input_b && _scope($scope6_id, {});
		}, $wg__input_b);
		$wi__input_b && _subscribe($input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_b && _resume_branch($scope2_id);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("caught-b");
	}, void 0, "a3");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		g: $wi__input_a && $input_a__closures,
		h: $wi__input_b && $input_b__closures
	});
}, 1);
