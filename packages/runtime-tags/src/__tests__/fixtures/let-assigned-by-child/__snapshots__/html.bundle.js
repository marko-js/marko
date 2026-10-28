// tags/label.marko
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.onHide });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	label_default({
		label: "hide",
		onHide: _resume(function() {
			x = "";
		}, "a0", $scope0_id)
	});
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", value, $wg__input_promise)}</em>`);
				_write_if($scope0_reason, 0) && _scope($scope2_id, {});
			}, $wg__input_promise);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_scope($scope0_id, { f: input.promise });
}, 1);
