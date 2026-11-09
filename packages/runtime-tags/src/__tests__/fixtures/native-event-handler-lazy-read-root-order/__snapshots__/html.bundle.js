// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let data = {
		flag: 1,
		todo: { id: 1 }
	};
	_html(`<button class=h0>h0</button>${_el_mark($scope0_id, "a")}<button class=e>e</button>${_el_mark($scope0_id, "b")}<button class=h3>h3</button>${_el_mark($scope0_id, "c")}<div>${_text_mark($scope0_id, "d", "")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: data,
		f: data.todo
	});
}, 1);
