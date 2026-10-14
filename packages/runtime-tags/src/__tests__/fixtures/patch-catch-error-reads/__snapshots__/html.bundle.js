// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<p> </p>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a10;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
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
			_html(`<em>${_patch_text($scope4_id, "a", v, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a4");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a5", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "a", err.message)}</b>`);
		_scope($scope3_id, {});
	}, void 0, "a6", "a3", 1, "");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a7");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a8");
	}, void 0, ({ cause }) => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html(`<i>${_patch_text($scope5_id, "a", cause.code)}</i>`);
		_scope($scope5_id, {});
	}, void 0, "a9", "a1", 1, "");
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a10");
	_patch_value($scope0_id, "va11", count, 1);
	$scope0_page && _scope($scope0_id, {
		i: count,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures,
		k: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	});
}, 1);
