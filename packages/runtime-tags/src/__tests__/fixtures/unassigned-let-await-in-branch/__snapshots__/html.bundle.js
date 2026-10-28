// tags/label.marko
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_onHide = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", typeof input.onHide, $wg__input_onHide)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = input.show;
	label_default({ onHide: function() {
		show = false;
	} });
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", value, $wg__input_promise)}</em>`);
				$wi__input_promise && _scope($scope2_id, {});
			}, $wg__input_promise);
			_scope($scope1_id, { _: $wi__input_promise && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b");
	_scope($scope0_id, { f: input.promise });
}, 1);
