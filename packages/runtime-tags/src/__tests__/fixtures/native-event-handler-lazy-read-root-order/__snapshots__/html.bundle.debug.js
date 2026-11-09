// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let data = {
		flag: 1,
		todo: { id: 1 }
	};
	let log = "";
	_html(`<button class=h0>h0</button>${_el_mark($scope0_id, "#button/0")}<button class=e>e</button>${_el_mark($scope0_id, "#button/1")}<button class=h3>h3</button>${_el_mark($scope0_id, "#button/2")}<div>${_text_mark($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_todo#5");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		data,
		todo: data.todo
	}, "__tests__/template.marko", 0, {
		data: "3:6",
		todo: "4:10"
	});
}, 1);
