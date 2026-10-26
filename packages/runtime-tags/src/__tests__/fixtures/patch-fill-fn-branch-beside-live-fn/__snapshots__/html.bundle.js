// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a5;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 4), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 4), $cg__input_title = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5) ? _patch_fill($scope0_id, "va7", input.title, !$sg__input_title) : _patch_write($scope0_id, "xf", input.title, !$sg__input_title));
	const fmt = input.flag ? _bind_resume((s) => s + ":" + input.title, "a0", $scope0_id) : _resume((s) => s, "a1");
	const alt = input.alt || _bind_resume((s) => s + "=" + input.title, "a2", $scope0_id);
	const last = _bind_resume((s) => s + ";" + input.title, "a3", $scope0_id);
	const tag = _bind_resume((s) => s + "#" + input.title, "a4", $scope0_id);
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: alt });
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: last });
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope4 = _peek_scope_id();
			card_default({ fn: tag });
			$scope0_page && _scope($scope1_id, {
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
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.flag,
		f: input.title,
		h: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.alt,
		j: fmt,
		k: alt,
		l: last,
		m: tag,
		n: show
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_title && _patch_fill($scope0_id, "va6", input.flag, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_title && _patch_fill($scope0_id, "va8", input.alt, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", fmt, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va10", alt, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va11", last, !$sg__input_title), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va12", tag, !$sg__input_title));
}, 1);
