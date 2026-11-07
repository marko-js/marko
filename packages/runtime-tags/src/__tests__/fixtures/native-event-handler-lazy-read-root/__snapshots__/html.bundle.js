// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = {
		id: 1,
		info: { tag: "a" },
		meta: { label: "m" },
		title: "x"
	};
	let log = "";
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "a")}<button class=show>show</button>${_el_mark($scope0_id, "b")}<div class=label>${_text_mark($scope0_id, "c", todo.meta.label)}</div><div class=log>${_text_mark($scope0_id, "d", log)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: todo,
		i: todo.meta,
		l: log
	});
}, 1);
