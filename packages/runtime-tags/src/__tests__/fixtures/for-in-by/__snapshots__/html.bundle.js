// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let entries = {
		a: 1,
		b: 2
	};
	_html("<div>");
	_for_in(entries, (key, value) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(key)}${_el_resume($scope1_id, "a")}:<!>${_escape(value)}${_el_resume($scope1_id, "b")}</p>`);
		writeScope($scope1_id, {});
	}, (key) => key, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>Change</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
