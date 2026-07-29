// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_name = _serialize_guard($scope0_reason, 1), $sg__input_show = _serialize_guard($scope0_reason, 2), $sg__input_items = _serialize_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello ${_sep($sg__input_name)}${_escape(input.name)}${_el_resume($scope0_id, "#text/0", $sg__input_name)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			_serialize_if($scope0_reason, 2) && writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope2_id, "#text/0", $sg__input_items)}</li>`);
		_serialize_if($scope0_reason, 3) && writeScope($scope2_id, {}, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#text/2", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
