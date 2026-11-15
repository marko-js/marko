// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	const Rec = { content: _content("b1", ({ a, depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 1), $wi__a__OR__depth = _write_if($scope1_reason, 0), $wg__a__OR__depth = _write_guard($scope1_reason, 0);
		_html(`<span>${_text_mark($scope1_id, "a", a, $wg__a)}</span>`);
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
					a: _existing_scope($childScope)
				}), "b0", 0);
				($wi__input_x || $wi__a__OR__depth) && $wg__input_x && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "b", $wg__a__OR__depth, 0);
		($wi__input_x || $wi__a__OR__depth) && _scope($scope1_id, {
			e: $wi__input_x && a,
			_: _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	Rec.content({
		a: 0,
		depth: 1
	});
	$wi__input_x && _scope($scope0_id, {
		d: $wi__input_x && input.x,
		e: $wi__input_x && $input_x__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ x });
	_html(`<button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: x,
		a: _existing_scope($childScope)
	});
}, 1);
