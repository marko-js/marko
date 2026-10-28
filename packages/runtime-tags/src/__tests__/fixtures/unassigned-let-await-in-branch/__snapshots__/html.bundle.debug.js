// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_onHide = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", typeof input.onHide, $wg__input_onHide)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/label.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = input.show;
	label_default({ onHide: function() {
		show = false;
	} });
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", value, $wg__input_promise)}</em>`);
				$wi__input_promise && _scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			}, $wg__input_promise);
			_scope($scope1_id, { _: $wi__input_promise && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1);
