// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{ id: "a" },
		{ id: void 0 },
		{ id: "b" }
	];
	_html("<ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id ?? "?")}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, (item) => item.id, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>same</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: items });
	_resume_branch($scope0_id);
}, 1);
