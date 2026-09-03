// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let unused_1 = 123;
	const unused_2 = 456;
	let clickCount = 0;
	_html(`<div><button>${_text_resume($scope0_id, "#text/1", clickCount)}</button>${_el_resume($scope0_id, "#button/0")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { clickCount }, "__tests__/template.marko", 0, { clickCount: "4:8" });
}, 1);
