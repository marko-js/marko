// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("a3", ({ show, inner, v, w }) => {
		const $scope1_id = _scope_id();
		const $D_content__v__closures = /* @__PURE__ */ new Set();
		const $D_content__w__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__w = _write_guard($scope1_reason, 6), $wi__w = _write_if($scope1_reason, 6), $wi__show__OR__inner__OR__v__OR__w = _write_if($scope1_reason, 2), $wg__inner = _write_guard($scope1_reason, 4), $wg__show = _write_guard($scope1_reason, 3), $wi__show__OR__inner = _write_if($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 5);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				const f = _resume((x) => x + "!", "a0");
				_if(() => {
					if (inner) {
						const $scope3_id = _scope_id();
						let y = f(v);
						_html(`<p>${_text_mark($scope3_id, "a", y + w, $wg__w)}</p>`);
						$wi__show__OR__inner__OR__v__OR__w && _subscribe($wi__w && $D_content__w__closures, _subscribe($wi__v && $D_content__v__closures, _scope($scope3_id, {
							c: $wi__w && y,
							_: _scope_with_id($scope2_id)
						}), "a1", $wg__w), "a2", $wg__w);
						$wg__w || $wi__show__OR__inner__OR__v__OR__w && _write_guard($scope1_reason, 5) && _resume_branch($scope3_id);
						return 0;
					}
				}, $scope2_id, "a", $wg__inner, $wg__inner, 0, 0, 1);
				$wi__show__OR__inner__OR__v__OR__w && _scope($scope2_id, {
					b: _write_if($scope1_reason, 1) && f,
					_: _scope_with_id($scope1_id)
				});
				return 0;
			}
		}, $scope1_id, "a", _write_guard($scope1_reason, 0), $wg__show);
		$wi__show__OR__inner__OR__v__OR__w && _scope($scope1_id, {
			e: _write_if($scope1_reason, 3) && inner,
			f: $wi__show__OR__inner && v,
			g: $wi__show__OR__inner && w,
			i: $wi__v && $D_content__v__closures,
			j: $wi__w && $D_content__w__closures
		});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5 | _write_guard($scope0_reason, 3) << 7 | _write_guard($scope0_reason, 4) << 9 | _write_guard($scope0_reason, 5) << 11 | _write_guard($scope0_reason, 6) << 13);
	const $childScope = _peek_scope_id();
	D.content({
		show: input.show,
		inner: input.inner,
		v: input.v,
		w: input.w
	});
	_write_if($scope0_reason, 2) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
