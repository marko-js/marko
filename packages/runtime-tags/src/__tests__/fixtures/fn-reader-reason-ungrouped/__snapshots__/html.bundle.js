// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 6), $wi__input_w = _write_if($scope0_reason, 6), $wi__input_show__OR__input_inner__OR__input_v__OR__input_w = _write_if($scope0_reason, 2), $wg__input_inner = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_v__closures = /* @__PURE__ */ new Set();
	const $input_w__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const f = _resume((v) => v + "!", "a0");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(input.v);
					_html(`<p>${_text_mark($scope2_id, "a", y + input.w, $wg__input_w)}</p>`);
					$wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, {
						c: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}), "a1", $wg__input_w), "a2", $wg__input_w);
					$wg__input_w || $wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _write_guard($scope0_reason, 5) && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_inner, $wg__input_inner, 0, 0, 1);
			$wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _scope($scope1_id, {
				b: _write_if($scope0_reason, 1) && f,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _scope($scope0_id, {
		e: _write_if($scope0_reason, 3) && input.inner,
		f: $wi__input_show__OR__input_inner && input.v,
		g: $wi__input_show__OR__input_inner && input.w,
		i: $wi__input_v && $input_v__closures,
		j: $wi__input_w && $input_w__closures
	});
}, 1);
