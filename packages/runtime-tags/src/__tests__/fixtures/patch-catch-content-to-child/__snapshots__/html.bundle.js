// tags/box.marko
_shells({ b: "b;D%;<div><!></div>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1 a11;D%c%c%;<span><!> <!> <!></span>",
	a: "a !a6; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a4");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wi__err_message = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $catch_content__err_message__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a");
		box_default({ content: _content_elide("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", err.message)} ${_text_resume($scope2_id, "b", count, 2)} ${_patch_text($scope2_id, "c", input.label, 2, $scope0_reason, 0)}</span>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a2");
			_subscribe(_unfilled_if() && $wi__err_message && $catch_content__err_message__closures, _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }))));
		}, $scope1_id) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			l: $wi__err_message && $catch_content__err_message__closures,
			a: _existing_scope($childScope)
		});
	}, void 0, "a5", "a0", 1, "");
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "va8", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		h: count,
		i: _write_if($scope0_reason, 0) && $input_label__closures,
		k: $count__closures,
		j: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va7", input.label);
}, 1);
