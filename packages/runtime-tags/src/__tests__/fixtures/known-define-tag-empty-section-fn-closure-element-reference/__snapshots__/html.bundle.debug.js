// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const MyButton = { content: _content("__tests__/template.marko_1_content", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button></button>${_el_resume($scope1_id, "#button/0")} `);
		_script($scope1_id, "__tests__/template.marko_1_input_message");
		writeScope($scope1_id, {
			input_message: input.message,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { input_message: ["input.message", "2:18"] });
	}) };
	MyButton.content({ message: "hello" });
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
