// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ show, inner, v, w }) => {
		const $scope1_id = _scope_id();
		const $D_content__v__closures = new Set();
		const $D_content__w__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__w = _write_guard($scope1_reason, 6), $wi__w = _write_if($scope1_reason, 6), $wi__show__OR__inner__OR__v__OR__w = _write_if($scope1_reason, 2), $wg__inner = _write_guard($scope1_reason, 4), $wg__show = _write_guard($scope1_reason, 3), $wi__show__OR__inner = _write_if($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 5);
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				const f = _resume((x) => x + "!", "__tests__/template.marko_2/f");
				_if(() => {
					if (inner) {
						const $scope3_id = _scope_id();
						let y = f(v);
						_html(`<p>${_text_mark($scope3_id, "#text/0", y + w, $wg__w)}</p>`);
						$wi__show__OR__inner__OR__v__OR__w && _subscribe($wi__w && $D_content__w__closures, _subscribe($wi__v && $D_content__v__closures, _scope($scope3_id, {
							y: $wi__w && y,
							_: _scope_with_id($scope2_id)
						}, "__tests__/template.marko", "4:6", { y: "5:12" }), "__tests__/template.marko_3_v#1:5/subscribe", $wg__w), "__tests__/template.marko_3_w#1:6/subscribe", $wg__w);
						$wg__w || $wi__show__OR__inner__OR__v__OR__w && _write_guard($scope1_reason, 5) && _resume_branch($scope3_id);
						return 0;
					}
				}, $scope2_id, "#text/0", $wg__inner, $wg__inner, 0, 0, 1);
				$wi__show__OR__inner__OR__v__OR__w && _scope($scope2_id, {
					f: _write_if($scope1_reason, 1) && f,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "2:4", { f: "3:12" });
				return 0;
			}
		}, $scope1_id, "#text/0", _write_guard($scope1_reason, 0), $wg__show);
		$wi__show__OR__inner__OR__v__OR__w && _scope($scope1_id, {
			inner: _write_if($scope1_reason, 3) && inner,
			v: $wi__show__OR__inner && v,
			w: $wi__show__OR__inner && w,
			"ClosureScopes:v/8": $wi__v && $D_content__v__closures,
			"ClosureScopes:w/9": $wi__w && $D_content__w__closures
		}, "__tests__/template.marko", "1:2", {
			inner: "1:19",
			v: "1:26",
			w: "1:29"
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
	_write_if($scope0_reason, 2) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
