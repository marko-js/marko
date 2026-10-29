// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	"~a0": "~a0;D ;<p> </p>",
	a: "a !;b%;<!><!><!>",
	a3: "a3 a7;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			const Body = { content: _content("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<p>${_text_resume($scope2_id, "a", input.w, 1, $scope0_reason, 2)}</p>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "a1" : "a2");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a2");
			}, $scope1_id, 1) };
			_if(() => {
				if (show) {
					const $scope3_id = _scope_id();
					_patch_child(0);
					Body.content({});
					_patch_child_end();
					_scope($scope3_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_v, 1, 0, 0, ["a3"], $scope0_reason, 1);
	_scope($scope0_id, {
		f: input.w,
		g: _write_if($scope0_reason, 1) && show,
		h: _write_if($scope0_reason, 2) && $input_w__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 2));
	$wg__input_v || _resume_branch($scope0_id);
}, 1);
