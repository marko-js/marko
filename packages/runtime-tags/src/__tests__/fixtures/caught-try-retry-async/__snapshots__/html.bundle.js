// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 2), $wi__input_value = _write_if($scope0_reason, 2), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.value, (value) => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_resume($scope4_id, "a", value, $wg__input_value)}</p>`);
					$wi__input_value && _scope($scope4_id, {});
				}, $wg__input_value);
				$wi__input_show__OR__input_value && _subscribe($wi__input_value && $input_value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
				$wi__input_show__OR__input_value && _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("Unavailable");
			}, void 0, "a1");
			$wi__input_show__OR__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show, $wg__input_show, "</main>");
	$wi__input_show__OR__input_value && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.value,
		f: $wi__input_value && $input_value__closures
	});
}, 1);
