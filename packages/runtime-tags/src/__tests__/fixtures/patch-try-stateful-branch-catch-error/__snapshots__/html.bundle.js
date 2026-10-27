// template.marko
_shells({ a: "a !a4; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1), $wi__input_p = _write_if($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", input.p, (v) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", v, $wg__input_p)}</em>`);
					$wi__input_p && _scope($scope4_id, {});
				}, $wg__input_p, 0);
				_subscribe($wi__input_p && $input_p__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "a1", 0);
				_resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.title, $wg__input_title)} ${_text_resume($scope2_id, "b", err.message, $wg__err_message * 2)}</p>`);
				_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_title || $wg__err_message);
				$wg__input_title || $wg__err_message || _resume_branch($scope2_id);
			}, void 0, "a2", "a3");
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
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.title, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", input.p, !_server_guard($scope0_reason, 1)));
}, 1);
