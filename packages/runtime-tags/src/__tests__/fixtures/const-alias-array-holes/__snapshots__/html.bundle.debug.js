// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	const [first, , third, ...more] = list;
	_html(`<div>${_text_resume($scope0_id, "#text/0", first)} ${_text_resume($scope0_id, "#text/1", third, 2)} ${_text_resume($scope0_id, "#text/2", more.length, 2)}</div><button></button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
