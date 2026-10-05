// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</span>`);
	_script($scope0_id, "a0", $wg__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush$1, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter(1, 1), () => {
					_scope_id();
					$Child_withLoadAssets({ value: 1 });
				}, 0);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	_scope($scope0_id, { c: show });
}, 1);
