// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const arrA = [
		1,
		2,
		3
	];
	forOf(arrA, (val, i) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(i)}: ${_escape(val)}</div>`);
	});
	let arrB = [
		1,
		2,
		3
	];
	_for_of(arrB, (val, i) => {
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(i)}: <!>${_escape(val)}${_el_resume($scope2_id, "#text/1")}</div>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "9:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
