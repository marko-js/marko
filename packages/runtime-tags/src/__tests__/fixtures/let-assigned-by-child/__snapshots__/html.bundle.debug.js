// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0");
	_scope($scope0_id, { input_onHide: input.onHide }, "__tests__/tags/label.marko", 0, { input_onHide: ["input.onHide"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	label_default({
		label: "hide",
		onHide: _resume(function() {
			x = "";
		}, "__tests__/template.marko_0/onHide", $scope0_id)
	});
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", value, $wg__input_promise)}</em>`);
				_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			}, $wg__input_promise);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_scope($scope0_id, { input_promise: input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] });
}, 1);
