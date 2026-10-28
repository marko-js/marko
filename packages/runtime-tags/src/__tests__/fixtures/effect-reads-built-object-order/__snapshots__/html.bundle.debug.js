// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.x, $wg__input_x)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_c#8", $wg__input_x);
	_scope($scope0_id, {
		a: _write_if($scope0_reason, 0) && a,
		b: _write_if($scope0_reason, 1) && b,
		c
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8",
		c: "4:8"
	});
}, 1);
