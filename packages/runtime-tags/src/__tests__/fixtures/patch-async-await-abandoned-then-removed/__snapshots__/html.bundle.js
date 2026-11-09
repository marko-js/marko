// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1,<i>loading</i>",
	a2: "a2;b%bD ;<!><!><span> </span>",
	a: "a;D%;<main><!></main>",
	a3: "a3;D ;<b> </b>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_a = _write_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 4), $ui__input_a2 = _unfilled_if($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 3);
				_await($scope2_id, "a", input.a, (a) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_mark($scope4_id, "a", a, 1, $scope0_reason, 3)}</b>`);
					_scope($scope4_id, {});
				}, 1, "a0", $ui__input_a && 2);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a5", 1);
				$wi__input_show__OR__input_a && _subscribe($ui__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 3) && "a5", 0);
				$wi__input_show__OR__input_a && _resume_branch($scope2_id);
				return 0;
			}
		}, $scope1_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a4"], $scope0_reason, 2);
		_html(`<span>${_text_mark($scope1_id, "b", input.label, 1, $scope0_reason, 4)}</span>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a6", $cg__input_show);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a7", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_show && "a6"), $cg__input_label && "a7");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a1", void 0, "a2", 1, 0, 2);
	_html("</main>");
	$fg__input_a && $cg__input_show && _patch_subscribers($scope0_id, "a8", "e");
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_a2) && input.a,
		h: _write_if($scope0_reason, 3) && ($ui__input_a2 || $ui__input_show) && $input_a__closures,
		g: _write_if($scope0_reason, 2) && $ui__input_show && $input_show__closures,
		i: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures
	}) || $fg__input_a && $ui__input_show && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 3));
}, 1);
