// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a: "a !a6;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_error = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_patch_text($scope3_id, "a", err)}</b>`);
		_scope($scope3_id, {});
	}, void 0, "a3", "a1", 1, 2);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a4");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			Ci: $wi__input_error && 1
		}), _client_guard($scope0_reason, 0) && "a4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<i>${_patch_text($scope4_id, "a", err.message)}</i>`);
		_scope($scope4_id, {});
	}, void 0, "a5", "a0", 1, 2);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "va7", count, 1);
	$scope0_page && _scope($scope0_id, {
		h: count,
		i: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures
	});
}, 1);
