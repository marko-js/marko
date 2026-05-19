// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<button>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<span id=count>0</span>");
			_serialize_if($scope0_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#button/0", $sg__input_show, 1, $sg__input_show, "</button>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
