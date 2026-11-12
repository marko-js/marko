// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 6), $wi__input_w = _write_if($scope0_reason, 6), $wi__input_show__OR__input_inner__OR__input_v__OR__input_w = _write_if($scope0_reason, 2), $wg__input_inner = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_inner = _write_if($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	const $input_w__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const f = _resume((v) => v + "!", "__tests__/template.marko_1/f");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(input.v);
					_html(`<p>${_text_mark($scope2_id, "#text/0", y + input.w, $wg__input_w)}</p>`);
					if (_write_if($scope0_reason, 2)) {
						const $scope2_write = _scope($scope2_id, {
							y: $wi__input_w && y,
							_: _scope_with_id($scope1_id)
						}, "__tests__/template.marko", "3:4", { y: "4:10" });
						_subscribe($wi__input_v && $input_v__closures, $scope2_write, "__tests__/template.marko_2_input_v#0:5/subscribe", $wg__input_w);
						_subscribe($wi__input_w && $input_w__closures, $scope2_write, "__tests__/template.marko_2_input_w#0:6/subscribe", $wg__input_w);
					}
					$wg__input_w || $wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _write_guard($scope0_reason, 5) && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_inner, $wg__input_inner, 0, 0, 1);
			$wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _scope($scope1_id, {
				f: _write_if($scope0_reason, 1) && f,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { f: "2:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_inner__OR__input_v__OR__input_w && _scope($scope0_id, {
		input_inner: _write_if($scope0_reason, 3) && input.inner,
		input_v: $wi__input_show__OR__input_inner && input.v,
		input_w: $wi__input_show__OR__input_inner && input.w,
		"ClosureScopes:input_v/8": $wi__input_v && $input_v__closures,
		"ClosureScopes:input_w/9": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_v: ["input.v"],
		input_w: ["input.w"]
	});
}, 1);
