// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_text_resume($scope0_id, "a", input.label, _write_guard($scope0_reason, 0))}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.label + ": 0")}</p>`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: input.label,
		i: count
	});
}, 1);
