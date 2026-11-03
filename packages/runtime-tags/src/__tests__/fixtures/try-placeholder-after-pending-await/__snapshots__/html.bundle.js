// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0), $wg__input_b = _write_guard($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.a, (a) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", a, $wg__input_a)}</p>`);
		_write_if($scope0_reason, 0) && _scope($scope2_id, {});
	}, $wg__input_a);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_text_resume($scope4_id, "a", b, $wg__input_b)}</span>`);
			$wi__input_b && _scope($scope4_id, {});
		}, $wg__input_b);
		$wi__input_b && _subscribe($input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a1");
	_html("</main>");
	$wi__input_b && _scope($scope0_id, { g: $input_b__closures });
}, 1);
