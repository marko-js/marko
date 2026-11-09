// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = input.todo;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<div>${_text_mark($scope1_id, "a", todo.id + JSON.stringify(todo))}</div>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>x</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: todo });
}, 1);
