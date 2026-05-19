// tags/child.marko
let id = 0;
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input");
	writeScope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					const $el = _el($scope2_id, "__tests__/template.marko_2_#div");
					_html(`<div></div>${_el_resume($scope2_id, "#div/0")}`);
					child_default({ value: $el });
					writeScope($scope2_id, {}, "__tests__/template.marko", "2:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_show, $sg__input_show, 0, 1);
			writeScope($scope1_id, { _: $si__input_show && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show);
	child_default({ value: $el_getter });
	_html("<hr>");
	_if(() => {
		if (true) {
			const $scope3_id = _scope_id();
			_html(`<div></div>${_el_resume($scope3_id, "#div/0")}`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "19:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 0, $sg__input_show, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$si__input_show && writeScope($scope0_id, { input_show: input.show }, "__tests__/template.marko", 0, { input_show: ["input.show"] });
}, 1);
