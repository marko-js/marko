// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $el = _el($scope1_id, "__tests__/template.marko_1_#button#0");
		_scope_reason();
		_html(`<button></button>${_el_resume($scope1_id, "#button/0")}`);
		const $return = $el;
		_script($scope1_id, "__tests__/template.marko_1_input_onClick#3");
		writeScope($scope1_id, { input_onClick: input.onClick }, "__tests__/template.marko", "1:2", { input_onClick: ["input.onClick", "1:15"] });
		return $return;
	}, $scope0_id) };
	let foo = Child.content({ onClick: _resume(function() {
		foo().innerHTML = "clicked";
	}, "__tests__/template.marko_0/onClick", $scope0_id) });
	writeScope($scope0_id, { foo }, "__tests__/template.marko", 0, { foo: "6:8" });
}, 1);
