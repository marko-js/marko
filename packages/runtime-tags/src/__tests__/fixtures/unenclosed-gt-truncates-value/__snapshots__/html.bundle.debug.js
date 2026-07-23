// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_n = _serialize_guard($scope0_reason, 2), $si__input_n = _serialize_if($scope0_reason, 2), $sg__input_n__OR__input_ok = _serialize_guard($scope0_reason, 0), $sg__input_ok = _serialize_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.n) {
			const $scope1_id = _scope_id();
			_html(" 0>truncated");
			$si__input_n && writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_n, $sg__input_n, $sg__input_n__OR__input_ok);
	const positive = input.delta;
	_html(`= 0/><div>${_escape(positive)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 3))}</div>`);
	_if(() => {
		if (input.n > 0) {
			const $scope2_id = _scope_id();
			_html("enclosed");
			$si__input_n && writeScope($scope2_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", $sg__input_n, $sg__input_n, $sg__input_n__OR__input_ok);
	_if(() => {
		if (input.ok) {
			const $scope3_id = _scope_id();
			_html("a > b");
			_serialize_if($scope0_reason, 4) && writeScope($scope3_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $sg__input_ok, $sg__input_ok, $sg__input_n__OR__input_ok);
	_html(`<div${_attr_class(input.cls)}>plain</div>${_el_resume($scope0_id, "#div/4", _serialize_guard($scope0_reason, 5))}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
