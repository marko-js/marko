// b.marko
var b_default = _template("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>b ${_text_resume($scope0_id, "#text/1", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", a_default, { depth: input.depth - 1 }, 0, 0, $wg__input_depth);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/b.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "__tests__/b.marko_0");
	_scope($scope0_id, { n }, "__tests__/b.marko", 0, { n: "2:6" });
});

// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "__tests__/b.marko", flush, "ready:__tests__/b.marko");
var a_default = _template("__tests__/a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>a ${_text_resume($scope0_id, "#text/1", input.depth, $wg__input_depth * 2)}:${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$B_withLoadAssets({ depth: input.depth - 1 });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/a.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/3", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "__tests__/a.marko_0");
	_scope($scope0_id, { n }, "__tests__/a.marko", 0, { n: "2:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	a_default({ depth: 3 });
}, 1);
