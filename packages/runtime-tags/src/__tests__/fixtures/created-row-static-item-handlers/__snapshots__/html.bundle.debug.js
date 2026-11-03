// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea></textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/tags/field.marko_0_input_onKeyDown#3");
	_scope($scope0_id, { input_onKeyDown: input.onKeyDown }, "__tests__/tags/field.marko", 0, { input_onKeyDown: ["input.onKeyDown"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			forOf([1, 2], (i) => {
				const $scope2_id = _scope_id();
				field_default({ onKeyDown: _resume(function() {
					count += i;
				}, "__tests__/template.marko_2/onKeyDown", $scope2_id) });
				_html(`<button>+</button>${_el_resume($scope2_id, "#button/1")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					i,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { i: "3:8" });
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
