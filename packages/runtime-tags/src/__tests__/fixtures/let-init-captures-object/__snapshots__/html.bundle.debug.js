// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = { self: _resume(() => a, "__tests__/template.marko_0/a", $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "#text/1", typeof a.self)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { a }, "__tests__/template.marko", 0, { a: "1:6" });
}, 1);
