// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const Rec = { content: _content("__tests__/tags/child.marko_1*content", ({ a, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 1), $wi__a__OR__depth = _write_if($scope1_reason, 0), $wg__a__OR__depth = _write_guard($scope1_reason, 0);
		_html(`<span>${_text_mark($scope1_id, "#text/0", a, $wg__a)}</span>`);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason(($wg__input_x || $wg__a__OR__depth) << 1 | ($wg__input_x || $wg__a) << 3);
				const $childScope = _peek_scope_id();
				Rec.content({
					a: a || input.x,
					depth: depth - 1
				});
				($wi__input_x || $wi__a__OR__depth) && _subscribe($wi__input_x && $input_x__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/child.marko", "3:4"), "__tests__/tags/child.marko_2_input_x#0:3/subscribe", 0);
				($wi__input_x || $wi__a__OR__depth) && $wg__input_x && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__a__OR__depth, 0);
		($wi__input_x || $wi__a__OR__depth) && _scope($scope1_id, {
			a: $wi__input_x && a,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", { a: "1:15" });
	}, $scope0_id) };
	Rec.content({
		a: 0,
		depth: 1
	});
	$wi__input_x && _scope($scope0_id, {
		input_x: $wi__input_x && input.x,
		"ClosureScopes:input_x/4": $wi__input_x && $input_x__closures
	}, "__tests__/tags/child.marko", 0, { input_x: ["input.x"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ x });
	_html(`<button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
