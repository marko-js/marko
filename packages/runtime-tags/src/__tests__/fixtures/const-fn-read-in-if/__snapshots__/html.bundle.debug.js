// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const f = _resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	_if(() => {
		if (input.x) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", f(), $wg__input_a)}</span>`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_x, 0, 0, 1);
	counter_default({});
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_a: input.a,
		f
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	});
}, 1);
