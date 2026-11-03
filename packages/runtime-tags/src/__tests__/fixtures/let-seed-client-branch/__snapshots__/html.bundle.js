// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			if (input.v === "a") {
				const $scope2_id = _scope_id();
				_html(`<p>A ${_text_resume($scope2_id, "a", input.w, $wg__input_w * 2)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_w);
			} else {
				const $scope3_id = _scope_id();
				_html(`<p>B ${_text_resume($scope3_id, "a", input.w, $wg__input_w * 2)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_w && 1
				}), "a1", $wg__input_w);
			}
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: on,
		i: $wi__input_w && $input_w__closures
	});
}, 1);
