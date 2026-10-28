// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.c, {}, 0, 0, $wg__input_c);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.c });
});

// tags/one.marko
var one_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_content__OR__input_show = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.Tag, {
		c: input.content,
		show: input.show
	}, 0, 0, $wg__input_Tag__OR__input_content__OR__input_show);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.Tag,
		e: _write_if($scope0_reason, 1) && input.content,
		f: _write_if($scope0_reason, 0) && input.show
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_y = _write_if($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_x << 3 | $wg__input_x << 5 | $wg__input_x << 7);
	const $childScope = _peek_scope_id();
	one_default({
		Tag: card_default,
		show: input.x === 1,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "a", input.y, $wg__input_y * 2)}`);
			$wi__input_x__OR__input_y && _subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_y);
			$wg__input_y || $wi__input_x__OR__input_y && _resume_branch($scope1_id);
		}, $scope0_id, ($scope) => [{ e: input.y }])
	});
	$wi__input_x__OR__input_y && _scope($scope0_id, {
		e: $wi__input_x && input.y,
		f: $wi__input_y && $input_y__closures,
		a: $wi__input_x && _existing_scope($childScope)
	});
}, 1);
