// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(item.name)}${_el_resume($scope1_id, "#text/0", $sg__input_items)}: <!>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</span>`);
		writeScope($scope1_id, { _: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, $sg__input_items, $sg__input_items, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
