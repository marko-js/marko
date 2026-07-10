// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = input.items;
	_html(`<button>reverse</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(item.name)}${_el_resume($scope1_id, "#text/0")}</span>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, "id", $scope0_id, "#text/1", 1, 1, 1, 0, 1, 1);
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<em>${_escape(item.name)}${_el_resume($scope2_id, "#text/0")}</em>`);
		writeScope($scope2_id, {}, "__tests__/template.marko", "6:2");
	}, (item) => item.id, $scope0_id, "#text/2", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
