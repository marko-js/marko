// tags/card/index.marko
_shells({ b: "b;D ;<em> </em>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_key__OR__input_title = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 4), $sg__input_title = _server_guard($scope0_reason, 4), $sg__input_key__OR__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5) ? _patch_fill($scope0_id, "va4", input.title, !$sg__input_title) : _patch_write($scope0_id, "xf", input.title, !$sg__input_title));
	const key = input.key;
	const o = {
		[key]: _bind_resume((s) => s + ":" + input.title, "a0", $scope0_id),
		key: input.title
	};
	const [first] = [...input.pre, _bind_resume((s) => s + "=" + input.title, "a1", $scope0_id)];
	const tag = _bind_resume((s) => s + "#" + input.title, "a2", $scope0_id);
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: o[key] });
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: first });
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: tag });
			_html(`<p>${_text_resume($scope1_id, "d", o.key, $wg__input_key__OR__input_title)}</p>`);
			$scope0_page && _scope($scope1_id, {
				a: _write_if($scope0_reason, 0) && _existing_scope($childScope),
				b: _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				c: $wi__input_title && _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		g: $wi__input_title && input.pre,
		i: key,
		k: o,
		l: o.key,
		n: first,
		o: tag,
		p: show
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va5", input.pre, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va6", key, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", o, !$sg__input_key__OR__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", o.key, !$sg__input_key__OR__input_title), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", first, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va10", tag, !$sg__input_title));
}, 1);
