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
	const { fmt, wrap, quoted, keyed, templated } = {
		fmt: _resume((s) => s + ":" + input.title, "a0", $scope0_id),
		wrap: _resume(function(s) {
			return "(" + s + input.title + ")";
		}, "a1", $scope0_id),
		"quoted": _resume((s) => s + "'" + input.title, "a2", $scope0_id),
		["keyed"]: _resume((s) => s + "[" + input.title, "a3", $scope0_id),
		[`templated`]: _resume((s) => s + "`" + input.title, "a4", $scope0_id)
	};
	const o = {
		get: _resume((s) => s + "=" + input.title, "a5", $scope0_id),
		0: _resume((s) => s + "0" + input.title, "a6", $scope0_id)
	};
	const tag = _resume((s) => s + "#" + input.title, "a7", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_title << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason($wg__input_title << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: wrap });
			_set_scope_reason($wg__input_title << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: quoted });
			_set_scope_reason($wg__input_title << 1);
			const $childScope4 = _peek_scope_id();
			card_default({ fn: keyed });
			_set_scope_reason($wg__input_title << 1);
			const $childScope5 = _peek_scope_id();
			card_default({ fn: templated });
			_set_scope_reason($wg__input_title << 1);
			const $childScope6 = _peek_scope_id();
			card_default({ fn: o.get });
			_set_scope_reason($wg__input_title << 1);
			const $childScope7 = _peek_scope_id();
			card_default({ fn: o[0] });
			_set_scope_reason($wg__input_title << 1);
			const $childScope8 = _peek_scope_id();
			card_default({ fn: tag });
			_scope($scope1_id, {
				a: $wi__input_title && _existing_scope($childScope),
				b: $wi__input_title && _existing_scope($childScope2),
				c: $wi__input_title && _existing_scope($childScope3),
				d: $wi__input_title && _existing_scope($childScope4),
				e: $wi__input_title && _existing_scope($childScope5),
				f: $wi__input_title && _existing_scope($childScope6),
				g: $wi__input_title && _existing_scope($childScope7),
				h: $wi__input_title && _existing_scope($childScope8)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		e: input.title,
		g: fmt,
		h: wrap,
		i: quoted,
		j: keyed,
		k: templated,
		m: o.get,
		n: o[0],
		o: tag,
		p: show
	});
}, 1);
