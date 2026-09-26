// tags/countdown.marko
const $content$1 = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0), $si__input_depth = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("__tests__/tags/countdown.marko_2*content", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__depth = _serialize_guard($scope2_reason, 0);
		_html(`<span>${_text_resume($scope2_id, "#text/0", depth, $sg__depth)}</span>`);
		_set_serialize_reason($sg__depth << 1);
		const $childScope = _peek_scope_id();
		$content$1({ depth: depth - 1 });
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/countdown.marko", "1:2");
	}, $scope0_id) };
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth << 1);
			const $childScope2 = _peek_scope_id();
			Level.content({ depth: input.depth });
			$si__input_depth && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/tags/countdown.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	$si__input_depth && _scope($scope0_id, {}, "__tests__/tags/countdown.marko", 0);
};
var countdown_default = _template("__tests__/tags/countdown.marko", $content$1);

// tags/countdown-buttons.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Level = { content: _content("__tests__/tags/countdown-buttons.marko_2*content", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__depth = _serialize_guard($scope2_reason, 0);
		_set_serialize_reason($sg__depth << 1);
		const $childScope = _peek_scope_id();
		$content({ depth: depth - 1 });
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/countdown-buttons.marko", "1:2");
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.depth, $sg__input_depth)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_serialize_reason($sg__input_depth << 1);
			const $childScope2 = _peek_scope_id();
			Level.content({ depth: input.depth });
			_serialize_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/tags/countdown-buttons.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2", $sg__input_depth, $sg__input_depth, $sg__input_depth);
	_script($scope0_id, "__tests__/tags/countdown-buttons.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/countdown-buttons.marko", 0);
};
var countdown_buttons_default = _template("__tests__/tags/countdown-buttons.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	countdown_default({ depth: 2 });
	countdown_buttons_default({ depth: 2 });
}, 1);
