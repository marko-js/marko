// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a3: "a3;D ;<p> </p>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $x__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.show ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_show ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_show__closures, _scope($scope1_id, { _: $wi__input_show && _scope_with_id($scope0_id) }), $cg__input_show && "a1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", x)}</b>`);
		_subscribe($x__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
	}, 0, "a2", "a3", 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", x, 1);
	_scope($scope0_id, {
		f: x,
		h: $x__closures,
		g: $wi__input_show && _unfilled_if($scope0_reason, 1) && $input_show__closures
	});
	_resume_branch($scope0_id);
}, 1);
