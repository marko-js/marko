// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0",
	a1: "a1;D ;<em> </em>",
	a2: "a2",
	a3: "a3;D ;<p> </p>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;b%;<!><!><!>",
	a: "a !a10;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "a", v, 1, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a1", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a6" : "a7");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a7", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
		_scope($scope3_id, {});
	}, 0, "a2", "a5", 1, 1, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "a8" : "a9");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a9");
	}, void 0, ({ cause }) => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<i>${_text_resume($scope5_id, "a", cause.code, 1, 4, 0)}</i>`);
		_scope($scope5_id, {});
	}, 0, "a0", "a3", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		i: count,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures,
		k: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	});
}, 1);
