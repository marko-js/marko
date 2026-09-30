// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let b = "";
	_html(`<div><span>s</span>${_text_resume($scope0_id, "#text/0", b)}</div><div><!--note-->${_text_resume($scope0_id, "#text/1", b)}</div><button>set</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
