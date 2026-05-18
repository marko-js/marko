// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el3_getter = _hoist($scope0_id, "__tests__/template.marko_0_#li/hoist");
	_for_to(5, 0, 1, () => {
		const $scope1_id = _scope_id();
		_html(`<div></div>${_el_resume($scope1_id, "#div/0")}`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	let to = 3;
	_html("<hr>");
	_for_to(to, 0, 1, () => {
		const $scope2_id = _scope_id();
		_html(`<div></div>${_el_resume($scope2_id, "#div/0")}`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "15:2");
	}, 0, $scope0_id, "#text/1", 1, 0, 0, 0, 1);
	_html("<hr>");
	_for_to(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html("<ul>");
		_for_to(3, 0, 1, (j) => {
			const $scope4_id = _scope_id();
			_html(`<li${_attr("data-index", i * 4 + j)}></li>${_el_resume($scope4_id, "#li/0")}`);
			writeScope($scope4_id, {}, "__tests__/template.marko", "30:4");
		}, 0, $scope3_id, "#ul/0", 1, 0, 0, 0, 1);
		_html("</ul>");
		writeScope($scope3_id, {}, "__tests__/template.marko", "28:2");
	}, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_resume_branch($scope0_id);
}, 1);
