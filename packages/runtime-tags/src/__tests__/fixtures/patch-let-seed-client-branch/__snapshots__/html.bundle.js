// template.marko
_shells({ a: "a !a3; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $cg__input_w = _client_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1), $fg__input_v = _filled_guard($scope0_reason, 0), $fg__input_w = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			let x = input.v;
			_if(() => {
				if (x === "a") {
					const $scope2_id = _scope_id();
					_html(`<p>A ${_text_mark($scope2_id, "a", input.w, $wg__input_w * 2)}</p>`);
					$cg__input_w && _patch_render($scope2_id, "a0");
					_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {}), $cg__input_w && "a0", $wg__input_w);
					return 0;
				} else {
					const $scope3_id = _scope_id();
					_html(`<p>B ${_text_mark($scope3_id, "a", input.w, $wg__input_w * 2)}</p>`);
					$cg__input_w && _patch_render($scope3_id, "a1");
					_subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, { Ci: $wi__input_w && 1 }), $cg__input_w && "a1", $wg__input_w);
					return 1;
				}
			}, $scope1_id, "a", 1, 1, 0, 0, 1);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a3");
	$fg__input_v && _patch_render($scope0_id, "a2", "e");
	$fg__input_w && _patch_subscribers($scope0_id, "a4", "f");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: on,
		i: $wi__input_w && $input_w__closures
	}) || ($fg__input_v && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 0)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 1)));
}, 1);
