// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [{
		a: 1,
		b: 2
	}, {
		a: 3,
		b: 4
	}];
	_html("<ul>");
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.a + item.b)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>rev</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_list");
	writeScope($scope0_id, { list }, "__tests__/template.marko", 0, { list: "1:6" });
	_resume_branch($scope0_id);
}, 1);
