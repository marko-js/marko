// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", resolveAfter(1, 1), (value) => {
		const $scope1_id = _scope_id();
		const obj = { get bad() {
			throw new Error("getter failed");
		} };
		_html(`<button>${_escape(value)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { obj }, "__tests__/template.marko", "3:2", { obj: "4:10" });
	});
}, 1);
