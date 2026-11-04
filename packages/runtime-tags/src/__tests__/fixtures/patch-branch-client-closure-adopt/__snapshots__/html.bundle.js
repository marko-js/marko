// template.marko
_shells({ a: "a !a4;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "a", "x:" + input.title, $wg__input_title)}</b>`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "a", "y:" + input.title, $wg__input_title)}</i>`);
					_if(() => {
						{
							const $scope3_id = _scope_id();
							_html(`<u>${_text_mark($scope3_id, "a", "z:" + input.title, $wg__input_title)}</u>`);
							$cg__input_title && _patch_render($scope3_id, "a0");
							_subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, { Cg: $wi__input_title && 1 }), $cg__input_title && "a0", $wg__input_title);
							return 0;
						}
					}, $scope2_id, "b", 1, 1, 0, 0, 1);
					$cg__input_title && _patch_render($scope2_id, "a1");
					_subscribe($open__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {}), $cg__input_title && "a1"), "a2");
					return 0;
				}
			}, $scope1_id, "b");
			$cg__input_title && _patch_render($scope1_id, "a3");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_title && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_title && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: input.title,
		f: open,
		g: $wi__input_title && $input_title__closures,
		h: $open__closures
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
