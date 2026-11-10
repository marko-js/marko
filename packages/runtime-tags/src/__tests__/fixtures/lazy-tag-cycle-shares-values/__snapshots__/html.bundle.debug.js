// b.marko
const $A_withLoadAssets$1 = withLoadAssets(() => a_default, "__tests__/a.marko", flush, "ready:__tests__/a.marko");
var b_default = _template("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let obj = { name: "b" + input.depth };
	let from = input.from;
	_html(`<button>b</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", $A_withLoadAssets$1, {
				depth: input.depth - 1,
				from: obj
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/b.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/b.marko_0");
	_scope($scope0_id, {
		input_depth: input.depth,
		obj,
		from
	}, "__tests__/b.marko", 0, {
		input_depth: ["input.depth"],
		obj: "3:6",
		from: "4:6"
	});
});

// a.marko
const $B_withLoadAssets = withLoadAssets(() => b_default, "__tests__/b.marko", flush, "ready:__tests__/b.marko");
var a_default = _template("__tests__/a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let obj = { name: "a" + input.depth };
	let from = input.from;
	_html(`<button>a</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope = _peek_scope_id();
			$B_withLoadAssets({
				depth: input.depth - 1,
				from: obj
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/a.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_depth);
	_script($scope0_id, "__tests__/a.marko_0");
	_scope($scope0_id, {
		obj,
		from
	}, "__tests__/a.marko", 0, {
		obj: "3:6",
		from: "4:6"
	});
});

// template.marko
const $A_withLoadAssets = withLoadAssets(() => a_default, "__tests__/a.marko", flush, "ready:__tests__/a.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$A_withLoadAssets({ depth: 2 });
}, 1);
