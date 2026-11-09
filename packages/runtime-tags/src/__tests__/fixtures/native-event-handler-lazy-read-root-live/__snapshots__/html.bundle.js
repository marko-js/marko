// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = {
		id: 1,
		open: true
	};
	let log = "";
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "a")}<div>${_text_mark($scope0_id, "b", log)}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: todo,
		d: log,
		e: todo.open
	});
}, 1);
