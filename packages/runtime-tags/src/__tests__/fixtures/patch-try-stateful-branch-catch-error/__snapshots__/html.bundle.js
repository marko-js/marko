// template.marko
_shells({ a: "a !a4; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1), $wi__input_p = _write_if($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.p, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "a", v, $wg__input_p)}</em>`);
					$wi__input_p && _scope($scope4_id, {});
				}, $wg__input_p, void 0, 2);
				$cg__input_p && _patch_render($scope3_id, "a1");
				_subscribe($wi__input_p && $input_p__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), $cg__input_p && "a1", 0);
				$wg__input_p && _resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "a", input.title, $wg__input_title)} ${_text_mark($scope2_id, "b", err.message, $wg__err_message * 2)}</p>`);
				$cg__input_title && _patch_render($scope2_id, "a0");
				_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_title && "a0", $wg__input_title || $wg__err_message);
			}, 0, "a2", "a3");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: input.title,
		f: input.p,
		g: show,
		h: $wi__input_title && $input_title__closures,
		i: $wi__input_p && $input_p__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a5", "e"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.p, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a6", "f"));
}, 1);
