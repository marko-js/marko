// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a3;D%b ;<main><!><button>interactive</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.as, { class: "box" }, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", v, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, {});
		}, 1, "a0");
		$wi__input_as__OR__input_p && _subscribe(_unfilled_if($scope0_reason, 2) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a2", 0);
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ f: input.p }]), 0, _write_guard($scope0_reason, 1), void 0, 1, $scope0_reason, 1);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_patch_write($scope0_id, "wf", input.p, 1);
	$scope0_page && _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.p,
		g: _write_if($scope0_reason, 2) && $input_p__closures
	});
}, 1);
