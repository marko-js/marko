// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_el($scope0_id, "a0");
	let items = [0, 1];
	_html(`<button></button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: items });
	_resume_branch($scope0_id);
}, 1);
