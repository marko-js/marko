// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a16;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const { fmt, wrap, quoted, keyed, templated } = {
		fmt: _bind_resume((s) => s + ":" + input.title, "a0", $scope0_id),
		wrap: _bind_resume(function(s) {
			return "(" + s + input.title + ")";
		}, "a1", $scope0_id),
		"quoted": _bind_resume((s) => s + "'" + input.title, "a2", $scope0_id),
		["keyed"]: _bind_resume((s) => s + "[" + input.title, "a3", $scope0_id),
		[`templated`]: _bind_resume((s) => s + "`" + input.title, "a4", $scope0_id)
	};
	const o = {
		get: _bind_resume((s) => s + "=" + input.title, "a5", $scope0_id),
		0: _bind_resume((s) => s + "0" + input.title, "a6", $scope0_id)
	};
	const tag = _bind_resume((s) => s + "#" + input.title, "a7", $scope0_id);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			card_default({ fn: wrap });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "c", 2);
			card_default({ fn: quoted });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope4 = _peek_scope_id($scope1_id, "d", 3);
			card_default({ fn: keyed });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope5 = _peek_scope_id($scope1_id, "e", 4);
			card_default({ fn: templated });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope6 = _peek_scope_id($scope1_id, "f", 5);
			card_default({ fn: o.get });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope7 = _peek_scope_id($scope1_id, "g", 6);
			card_default({ fn: o[0] });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope8 = _peek_scope_id($scope1_id, "h", 7);
			card_default({ fn: tag });
			_patch_child_end();
			$cg__input_title && _patch_render($scope1_id, "a8");
			$cg__input_title && _patch_render($scope1_id, "a9");
			$cg__input_title && _patch_render($scope1_id, "a10");
			$cg__input_title && _patch_render($scope1_id, "a11");
			$cg__input_title && _patch_render($scope1_id, "a12");
			$cg__input_title && _patch_render($scope1_id, "a13");
			$cg__input_title && _patch_render($scope1_id, "a14");
			$cg__input_title && _patch_render($scope1_id, "a15");
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
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a16");
	$fg__input_title && _patch_render($scope0_id, "a8", "g");
	$fg__input_title && _patch_render($scope0_id, "a9", "h");
	$fg__input_title && _patch_render($scope0_id, "a10", "i");
	$fg__input_title && _patch_render($scope0_id, "a11", "j");
	$fg__input_title && _patch_render($scope0_id, "a12", "k");
	$fg__input_title && _patch_render($scope0_id, "a13", "m");
	$fg__input_title && _patch_render($scope0_id, "a14", "n");
	$fg__input_title && _patch_render($scope0_id, "a15", ["o", "e"]);
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
	}) || ($fg__input_title && _patch_write($scope0_id, "xg", fmt, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xh", wrap, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xi", quoted, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xj", keyed, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xk", templated, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xm", o.get, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xn", o[0], !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xo", tag, !$sg__input_title));
}, 1);
