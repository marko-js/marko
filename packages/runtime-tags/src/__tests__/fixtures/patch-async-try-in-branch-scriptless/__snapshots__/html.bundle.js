// template.marko
_shells({
	a1: "a1,loading",
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_value2 = _unfilled_if($scope0_reason, 2), $wi__input_value = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_value = _unfilled_if($scope0_reason, 2);
				_await($scope2_id, "a", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_mark($scope3_id, "a", input.value, 1, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a0", $cg__input_value);
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, { Cf: $wi__input_value && 1 }), $cg__input_value && "a0");
				}, 1, "a2", $ui__input_value && 3);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a6", 1);
				$wi__input_show__OR__input_value && _subscribe($ui__input_value && $input_value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_value && "a6", 0);
				$wi__input_show__OR__input_value && _resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a1", void 0, "a4", 0, 0, 2);
			$wi__input_show__OR__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_value2) && input.value,
		f: $wi__input_value && ($ui__input_value2 || $ui__input_show) && $input_value__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xe", input.value, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a7", "e");
}, 1);
