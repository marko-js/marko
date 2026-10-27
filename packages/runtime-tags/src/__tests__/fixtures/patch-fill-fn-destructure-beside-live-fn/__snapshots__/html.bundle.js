// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const [fmt] = [_bind_resume((s) => s + ":" + input.title, "a0", $scope0_id)];
	const tag = _bind_resume((s) => s + "#" + input.title, "a1", $scope0_id);
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: tag });
			$scope0_page && _scope($scope1_id, {
				a: $wi__input_title && _existing_scope($childScope),
				b: $wi__input_title && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		g: fmt,
		h: tag,
		i: show
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", fmt, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", tag, !$sg__input_title));
}, 1);
