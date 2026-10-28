// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 6), $wi__input_w = _write_if($scope0_reason, 6), $wg__input_inner = _write_guard($scope0_reason, 5), $wi__input_inner = _write_if($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 4), $wi__input_show__OR__input_inner__OR__input_w = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					let y = f(x);
					_html(`<p>${_text_resume($scope2_id, "#text/0", y + input.w, $wg__input_w)}</p>`);
					$wi__input_show__OR__input_inner__OR__input_w && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, {
						y: $wi__input_w && y,
						_: _scope_with_id($scope1_id)
					}, "__tests__/template.marko", "4:4", { y: "5:10" }), "__tests__/template.marko_2_input_w#0:6/subscribe", $wg__input_w);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_inner, $wg__input_inner, 0, 0, 1);
			_write_if($scope0_reason, 3) && _scope($scope1_id, {
				x: $wi__input_inner && x,
				f: $wi__input_inner && f,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				f: "3:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	$wi__input_show__OR__input_inner__OR__input_w && _scope($scope0_id, {
		input_v: $wi__input_show && input.v,
		input_inner: $wi__input_show && input.inner,
		input_w: _write_if($scope0_reason, 0) && input.w,
		"ClosureScopes:input_w/9": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_inner: ["input.inner"],
		input_w: ["input.w"]
	});
}, 1);
