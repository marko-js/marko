// tags/card/index.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.fn("x"), $wg__input)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const tag = _resume((s) => s + "#" + input.title, "a0", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: (s) => s + ":" + input.title });
			_set_scope_reason($wg__input_title << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: tag });
			_scope($scope1_id, {
				a: $wi__input_title && _existing_scope($childScope),
				b: $wi__input_title && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.title,
		f: tag,
		g: show
	});
}, 1);
