// tags/field.marko
var field_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea></textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.onKeyDown });
});

// template.marko
var template_default = _template("a", (input) => {
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
				}, "a0", $scope2_id) });
				_html(`<button>+</button>${_el_resume($scope2_id, "b")}`);
				_script($scope2_id, "a1");
				_scope($scope2_id, {
					d: i,
					_: _scope_with_id($scope1_id)
				});
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
