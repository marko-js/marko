// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a9;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 4), $cg__input_title = _client_guard($scope0_reason, 4), $wi__input_title = _write_if($scope0_reason, 4), $ui__input_title = _unfilled_if($scope0_reason, 4), $sg__input_title = _server_guard($scope0_reason, 4), $fg__input_title = _filled_guard($scope0_reason, 4), $fg__input_flag__OR__input_title = _filled_guard($scope0_reason, 0), $fg__input_title__OR__input_alt = _filled_guard($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 3), $fg__input_alt = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xf", input.title, !$sg__input_title);
	const fmt = input.flag ? _bind_resume((s) => s + ":" + input.title, "a0", $scope0_id) : _resume((s) => s, "a1");
	const alt = input.alt || _bind_resume((s) => s + "=" + input.title, "a2", $scope0_id);
	const last = _bind_resume((s) => s + ";" + input.title, "a3", $scope0_id);
	const tag = _bind_resume((s) => s + "#" + input.title, "a4", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			card_default({ fn: alt });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "c", 2);
			card_default({ fn: last });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope4 = _peek_scope_id($scope1_id, "d", 3);
			card_default({ fn: tag });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a5");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a6");
			$cg__input_title && _patch_render($scope1_id, "a7");
			$cg__input_title && _patch_render($scope1_id, "a8");
			_scope($scope1_id, {
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope),
				b: _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				c: $wi__input_title && _existing_scope($childScope3),
				d: $wi__input_title && _existing_scope($childScope4)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a9");
	$fg__input_flag__OR__input_title && _patch_render($scope0_id, "a5", "j");
	$fg__input_title__OR__input_alt && _patch_render($scope0_id, "a6", "k");
	$fg__input_title && _patch_render($scope0_id, "a7", "l");
	$fg__input_title && _patch_render($scope0_id, "a8", "m f");
	_patch_render($scope0_id, "a10", (($fg__input_flag ? " e" : "") + ($fg__input_title ? " f" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "a11", (($fg__input_title ? " f" : "") + ($fg__input_alt ? " h" : "")).slice(1), $scope0_reason, 1);
	_scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 0) && input.flag,
		f: input.title,
		h: _unfilled_if($scope0_reason, 1) && input.alt,
		j: fmt,
		k: alt,
		l: last,
		m: tag,
		n: show
	}) || ($fg__input_flag && $ui__input_title && _patch_write($scope0_id, "xe", input.flag, !_server_guard($scope0_reason, 3)), $fg__input_alt && $ui__input_title && _patch_write($scope0_id, "xh", input.alt, !_server_guard($scope0_reason, 5)), $fg__input_flag__OR__input_title && _patch_write($scope0_id, "xj", fmt, !_server_guard($scope0_reason, 0)), $fg__input_title__OR__input_alt && _patch_write($scope0_id, "xk", alt, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "xl", last, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xm", tag, !$sg__input_title));
}, 1);
