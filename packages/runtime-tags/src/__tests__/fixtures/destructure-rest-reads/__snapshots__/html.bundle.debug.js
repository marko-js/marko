// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		1,
		2,
		3
	];
	const [first, ...rest] = list;
	const [, ...[second, third]] = list;
	const copy = rest;
	_html(`<div>${_text_resume($scope0_id, "#text/0", first)}|${_text_resume($scope0_id, "#text/1", rest[0], 2)}|${_text_resume($scope0_id, "#text/2", rest[1], 2)}|${_text_resume($scope0_id, "#text/3", rest.length, 2)}</div><div>${_text_resume($scope0_id, "#text/4", second)}|${_text_resume($scope0_id, "#text/5", third, 2)}</div><div>${_text_resume($scope0_id, "#text/6", copy[0])}|${_text_resume($scope0_id, "#text/7", copy.length, 2)}</div><button>update</button>${_el_resume($scope0_id, "#button/8")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
