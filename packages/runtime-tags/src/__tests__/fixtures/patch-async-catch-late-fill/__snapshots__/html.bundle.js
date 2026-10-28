// template.marko
_shells({
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5",
	a: "a !a8;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a2", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a6" : "a7");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a7", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.title, 1, $scope0_reason, 0)} ${_text_resume($scope1_id, "b", err.message, 2, 4, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, 0, "a5", "a4", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		f: input.title,
		h: n,
		i: _write_if($scope0_reason, 0) && $input_title__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", input.title, !_server_guard($scope0_reason, 0));
}, 1);
