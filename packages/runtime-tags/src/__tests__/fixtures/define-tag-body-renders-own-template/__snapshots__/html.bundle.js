// tags/countdown.marko
const $content$1 = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("c0", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__depth = _write_guard($scope2_reason, 0);
		_html(`<span>${_text_resume($scope2_id, "a", depth, $wg__depth)}</span>`);
		_set_scope_reason($wg__depth << 1);
		const $childScope = _peek_scope_id();
		$content$1({ depth: depth - 1 });
		_write_if($scope2_reason, 0) && _scope($scope2_id, { b: _existing_scope($childScope) });
	}, $scope0_id) };
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope2 = _peek_scope_id();
			Level.content({ depth: input.depth });
			$wi__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, {});
};
var countdown_default = _template("c", $content$1);

// tags/countdown-buttons.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("b0", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__depth = _write_guard($scope2_reason, 0);
		_set_scope_reason($wg__depth << 1);
		const $childScope = _peek_scope_id();
		$content({ depth: depth - 1 });
		_write_if($scope2_reason, 0) && _scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "b", input.depth, $wg__input_depth)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope2 = _peek_scope_id();
			Level.content({ depth: input.depth });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "c", $wg__input_depth, $wg__input_depth);
	_script($scope0_id, "b1");
	_scope($scope0_id, {});
};
var countdown_buttons_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	countdown_default({ depth: 2 });
	countdown_buttons_default({ depth: 2 });
}, 1);
