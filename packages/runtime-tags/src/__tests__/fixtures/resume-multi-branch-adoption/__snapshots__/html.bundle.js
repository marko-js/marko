// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["first", "second"];
	_html(`<button id=clear>clear</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "b")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_if(() => {
			if (item) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(item)}${_el_resume($scope2_id, "a")}</span>`);
				_script($scope2_id, "a0");
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, "</div>", 1);
		writeScope($scope1_id, { c: item });
	}, 0, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
