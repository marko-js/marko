// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(item)}${_el_resume($scope1_id, "#text/1", $sg__input_list)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_$Change");
		writeScope($scope1_id, { $Change }, "__tests__/template.marko", "1:2", { $Change: "2:23" });
	}, 0, $scope0_id, "#text/0", $sg__input_list, $sg__input_list, $sg__input_list, 0, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
