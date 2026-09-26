// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let editing = false;
	_html("<svg><title><if=editing>editing</if><else>viewing</else></title><foreignObject class=host width=100 height=100><div>");
	_if(() => {
		if (editing) {
			const $scope1_id = _scope_id();
			_html("<input value=name>");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:11");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`</foreignObject></svg><button class=edit>edit</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { editing }, "__tests__/template.marko", 0, { editing: "1:6" });
}, 1);
