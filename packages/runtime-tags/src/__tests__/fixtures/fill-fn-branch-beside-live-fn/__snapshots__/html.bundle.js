// tags/card/index.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.fn("x"), $wg__input)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 3), $wg__input_flag__OR__input_title = _write_guard($scope0_reason, 0), $wg__input_title__OR__input_alt = _write_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const fmt = input.flag ? _resume((s) => s + ":" + input.title, "a0", $scope0_id) : _resume((s) => s, "a1");
	const alt = input.alt || _resume((s) => s + "=" + input.title, "a2", $scope0_id);
	const last = _resume((s) => s + ";" + input.title, "a3", $scope0_id);
	const tag = _resume((s) => s + "#" + input.title, "a4", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_flag__OR__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason($wg__input_title__OR__input_alt << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: alt });
			_set_scope_reason($wg__input_title << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: last });
			_set_scope_reason($wg__input_title << 1);
			const $childScope4 = _peek_scope_id();
			card_default({ fn: tag });
			_scope($scope1_id, {
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope),
				b: _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				c: $wi__input_title && _existing_scope($childScope3),
				d: $wi__input_title && _existing_scope($childScope4)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		e: $wi__input_title && input.flag,
		f: input.title,
		h: $wi__input_title && input.alt,
		j: fmt,
		k: alt,
		l: last,
		m: tag,
		n: show
	});
}, 1);
