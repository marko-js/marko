// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 6), $wi__input_w = _write_if($scope0_reason, 6), $wg__input_inner = _write_guard($scope0_reason, 5), $wi__input_inner = _write_if($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 4), $wi__input_show__OR__input_inner__OR__input_w = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "a0");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(x);
					_html(`<p>${_text_resume($scope2_id, "a", y + input.w, $wg__input_w)}</p>`);
					$wi__input_show__OR__input_inner__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {
						c: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}), "a1", $wg__input_w);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_inner, $wg__input_inner, 0, 0, 1);
			_write_if($scope0_reason, 3) && _scope($scope1_id, {
				b: $wi__input_inner && x,
				c: $wi__input_inner && f,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_show__OR__input_inner__OR__input_w && _scope($scope0_id, {
		e: $wi__input_show && input.v,
		f: $wi__input_show && input.inner,
		g: _write_if($scope0_reason, 0) && input.w,
		j: $wi__input_w && $input_w__closures
	});
}, 1);
