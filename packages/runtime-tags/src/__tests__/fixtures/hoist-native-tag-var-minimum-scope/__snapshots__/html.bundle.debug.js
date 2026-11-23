// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<pre id=root></pre>${_el_mark($scope0_id, "#pre/0")}<pre id=outer></pre>${_el_mark($scope0_id, "#pre/1")}<pre id=inner></pre>${_el_mark($scope0_id, "#pre/2")}`);
	_for_to(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_for_to(2, 0, 1, (j) => {
			const $scope2_id = _scope_id();
			_html(`<div${_attr_class(`${i}, ${j}`)}></div>${_el_mark($scope2_id, "#div/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
		}, 0, $scope1_id, "#text/0", 1, 0, 0, 0, 1);
		_script($scope1_id, "__tests__/template.marko_1", 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/3", 1, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
