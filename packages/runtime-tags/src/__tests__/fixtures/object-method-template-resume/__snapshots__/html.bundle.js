// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const picker = { get: _resume(function() {
		return child_default;
	}, "a0") };
	_if(() => {}, $scope0_id, "a");
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: count,
		d: picker
	});
}, 1);
