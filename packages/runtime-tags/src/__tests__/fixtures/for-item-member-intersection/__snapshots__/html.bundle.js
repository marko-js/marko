// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<li>${_escape(item.a + item.b)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>rev</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: list });
	_resume_branch($scope0_id);
}, 1);
