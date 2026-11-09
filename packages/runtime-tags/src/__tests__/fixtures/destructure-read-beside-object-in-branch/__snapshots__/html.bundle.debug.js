// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = input.todo;
	let show = true;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_text_mark($scope1_id, "#text/0", todo.id + JSON.stringify(todo))}</div>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>x</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { todo }, "__tests__/template.marko", 0, { todo: "3:6" });
}, 1);
