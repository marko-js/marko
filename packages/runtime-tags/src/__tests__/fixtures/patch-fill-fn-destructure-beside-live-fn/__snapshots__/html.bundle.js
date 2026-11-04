// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a4;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const [fmt] = [_bind_resume((s) => s + ":" + input.title, "a0", $scope0_id, 1)];
	const tag = _bind_resume((s) => s + "#" + input.title, "a1", $scope0_id, 1);
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_title << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			card_default({ fn: tag });
			_patch_child_end();
			$cg__input_title && _patch_render($scope1_id, "a2");
			$cg__input_title && _patch_render($scope1_id, "a3");
			_scope($scope1_id, {
				a: $wi__input_title && _existing_scope($childScope),
				b: $wi__input_title && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_title && _patch_render($scope0_id, "a2", "g");
	$fg__input_title && _patch_render($scope0_id, "a3", "h e");
	_scope($scope0_id, {
		e: input.title,
		g: fmt,
		h: tag,
		i: show
	}) || ($fg__input_title && _patch_write($scope0_id, "xg", fmt, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xh", tag, !$sg__input_title));
}, 1);
