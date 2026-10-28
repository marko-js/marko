// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output>${_text_resume($scope0_id, "b", input.get(), _write_guard($scope0_reason, 0))}</output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.get });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	label_view_default({ get: low });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		a: _existing_scope($childScope)
	});
}, 1);
