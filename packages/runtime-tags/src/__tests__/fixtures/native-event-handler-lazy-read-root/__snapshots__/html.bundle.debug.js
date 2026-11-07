// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = {
		id: 1,
		info: { tag: "a" },
		meta: { label: "m" },
		title: "x"
	};
	let log = "";
	_html(`<button class=bump>bump</button>${_el_mark($scope0_id, "#button/0")}<button class=show>show</button>${_el_mark($scope0_id, "#button/1")}<div class=label>${_text_mark($scope0_id, "#text/2", todo.meta.label)}</div><div class=log>${_text_mark($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		todo,
		meta: todo.meta,
		log
	}, "__tests__/template.marko", 0, {
		todo: "4:6",
		meta: "6:25",
		log: "8:6"
	});
}, 1);
