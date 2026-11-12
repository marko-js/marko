// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a7;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_key__OR__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 4), $sg__input_key__OR__input_title = _server_guard($scope0_reason, 0), $fg__input_key__OR__input_title = _filled_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 4), $fg__input_title = _filled_guard($scope0_reason, 4), $fg__input_key = _filled_guard($scope0_reason, 3), $fg__input_title__OR__input_pre = _filled_guard($scope0_reason, 1), $fg__input_pre = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xf", input.title, !$sg__input_title);
	const key = input.key;
	const o = {
		[key]: _bind_resume((s) => s + ":" + input.title, "a0", $scope0_id, 1),
		key: input.title
	};
	const [first] = [...input.pre, _bind_resume((s) => s + "=" + input.title, "a1", $scope0_id, 1)];
	const tag = _bind_resume((s) => s + "#" + input.title, "a2", $scope0_id, 1);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: o[key] });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			card_default({ fn: first });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "c", 2);
			card_default({ fn: tag });
			_patch_child_end();
			_html(`<p>${_text_mark($scope1_id, "d", o.key, $wg__input_key__OR__input_title)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a3");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a4");
			_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "a5");
			_patch_render($scope1_id, "a6", ((_filled_guard($scope0_reason, 3) ? " >i" : "") + (_filled_guard($scope0_reason, 0) ? " >k" : "")).slice(1), $scope0_reason, 0);
			_scope($scope1_id, {
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope),
				b: _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				c: $wi__input_title && _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	$fg__input_key && _patch_render($scope0_id, "a8", "i");
	$fg__input_key__OR__input_title && _patch_render($scope0_id, "a9", "k");
	$fg__input_key__OR__input_title && _patch_render($scope0_id, "a3", "l");
	$fg__input_title__OR__input_pre && _patch_render($scope0_id, "a4", "n");
	$fg__input_title && _patch_render($scope0_id, "a5", "o f");
	_patch_render($scope0_id, "a10", (($fg__input_title ? " f" : "") + ($fg__input_pre ? " g" : "")).slice(1), $scope0_reason, 1);
	_patch_render($scope0_id, "a11", (($fg__input_title ? " f" : "") + ($fg__input_key ? " i" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: input.title,
		g: $wi__input_title && input.pre,
		i: key,
		k: o,
		l: o.key,
		n: first,
		o: tag,
		p: show
	}) || ($fg__input_pre && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xg", input.pre, !_server_guard($scope0_reason, 5)), $fg__input_key && _patch_write($scope0_id, "xi", key, !_server_guard($scope0_reason, 3)), $fg__input_key__OR__input_title && _patch_write($scope0_id, "xk", o, !$sg__input_key__OR__input_title), $fg__input_key__OR__input_title && _patch_write($scope0_id, "xl", o.key, !$sg__input_key__OR__input_title), $fg__input_title__OR__input_pre && _patch_write($scope0_id, "xn", first, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "xo", tag, !$sg__input_title));
}, 1);
