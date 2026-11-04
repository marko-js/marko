// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2",
	a: "a !a4;D%b ;<main><!><button>interactive</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $ui__input_as = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.as, { class: "box" }, 1, _content_resume("a2", () => {
		const $scope1_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 2);
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {});
		}, 1, "a0", $ui__input_p && 2);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a3", 1);
		$wi__input_as__OR__input_p && _subscribe($ui__input_p && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a3", 0);
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{ f: input.p }] : []), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, void 0, 0, 0, "a2");
	_html(`<button>interactive</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		f: ($ui__input_as || _unfilled_if($scope0_reason, 2)) && input.p,
		g: _write_if($scope0_reason, 2) && $input_p__closures
	}) || _filled_guard($scope0_reason, 2) && (_client_branch_if("a2", $scope0_id) || $ui__input_as) && _patch_write($scope0_id, "xf", input.p, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a5", "f");
}, 1);
