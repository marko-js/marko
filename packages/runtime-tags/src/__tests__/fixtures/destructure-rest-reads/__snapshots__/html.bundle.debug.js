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
	_html(`<div>${_escape(first)}${_el_resume($scope0_id, "#text/0")}|<!>${_escape(rest[0])}${_el_resume($scope0_id, "#text/1")}|<!>${_escape(rest[1])}${_el_resume($scope0_id, "#text/2")}|<!>${_escape(rest.length)}${_el_resume($scope0_id, "#text/3")}</div><button>update</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
