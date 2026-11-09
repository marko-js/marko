// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = {
		id: 1,
		open: true
	};
	let log = "";
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "#button/0")}<div>${_text_mark($scope0_id, "#text/1", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_open#4");
	_script($scope0_id, "__tests__/template.marko_0_todo#2");
	_scope($scope0_id, {
		todo,
		log,
		open: todo.open
	}, "__tests__/template.marko", 0, {
		todo: "3:6",
		log: "4:6",
		open: "5:14"
	});
}, 1);
