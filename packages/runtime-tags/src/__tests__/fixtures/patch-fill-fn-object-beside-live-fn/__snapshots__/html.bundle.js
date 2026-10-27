// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a8;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
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
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _patch_child($scope1_id, "b", 1);
			card_default({ fn: wrap });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope3 = _patch_child($scope1_id, "c", 2);
			card_default({ fn: quoted });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope4 = _patch_child($scope1_id, "d", 3);
			card_default({ fn: keyed });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope5 = _patch_child($scope1_id, "e", 4);
			card_default({ fn: templated });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope6 = _patch_child($scope1_id, "f", 5);
			card_default({ fn: o.get });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope7 = _patch_child($scope1_id, "g", 6);
			card_default({ fn: o[0] });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope8 = _patch_child($scope1_id, "h", 7);
			card_default({ fn: tag });
			_patch_child_end();
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
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", fmt, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", wrap, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va11", quoted, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va12", keyed, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va13", templated, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va14", o.get, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va15", o[0], !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va16", tag, !$sg__input_title));
}, 1);
