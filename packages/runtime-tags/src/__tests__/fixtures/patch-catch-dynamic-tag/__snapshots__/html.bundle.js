// tags/large-label.marko
_shells({ b: "b;D%c%c%;<strong><!> <!> <!></strong>" });
var large_label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<strong>${_patch_text($scope0_id, "a", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)} ${_patch_text($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</strong>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/small-label.marko
_shells({ c: "c;D%c%c%;<small><!> <!> <!></small>" });
var small_label_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<small>${_patch_text($scope0_id, "a", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)} ${_patch_text($scope0_id, "c", input.label, 2, $scope0_reason, 2)}</small>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_large = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_large__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a5");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_content_withhold(err?.message), _patch_value($scope1_id, "va1", err?.message);
		_dynamic_tag($scope1_id, "a", input.large ? large_label_default : small_label_default, {
			message: err.message,
			count,
			label: input.label
		});
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_large && $input_large__closures, _scope($scope1_id, {
			d: err?.message,
			_: _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "a2"), _client_guard($scope0_reason, 1) && "a3"), "a4");
	}, void 0, "a6", "a0", 1, "");
	_script($scope0_id, "a7");
	_patch_value($scope0_id, "va10", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.large,
		g: input.label,
		i: count,
		j: $wi__input_large && $input_large__closures,
		k: $wi__input_label && $input_label__closures,
		m: $count__closures,
		l: $wi__input_error && _unfilled_if($scope0_reason, 2) && $input_error__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va8", input.large, !_server_guard($scope0_reason, 0)), _content_withhold(input.large), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label));
}, 1);
