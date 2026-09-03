// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const tag = "select";
	let pick = "b";
	_dynamic_tag($scope0_id, "#text/0", tag, { value: pick }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attr_option_value("a")}>A</option><option${_attr_option_value("b")}>B</option><option${_attr_option_value("c")}>C</option>`);
	}, $scope0_id));
	_html(`<button>pick c</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { tag }, "__tests__/template.marko", 0, { tag: "1:8" });
}, 1);
