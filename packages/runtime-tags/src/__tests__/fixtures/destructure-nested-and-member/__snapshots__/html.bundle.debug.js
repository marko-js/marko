// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: { b: 1 },
		c: 2
	};
	_html(`<div>${_text_resume($scope0_id, "#text/0", obj.a.b)} ${_text_resume($scope0_id, "#text/1", obj.c, 2)}</div><button>update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
