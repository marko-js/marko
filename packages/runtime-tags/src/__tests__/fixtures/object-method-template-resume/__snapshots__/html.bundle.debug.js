// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const picker = { get: _resume(function() {
		return child_default;
	}, "__tests__/template.marko_0/picker") };
	_if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", picker.get(), { value: count });
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		picker
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		picker: "4:8"
	});
}, 1);
