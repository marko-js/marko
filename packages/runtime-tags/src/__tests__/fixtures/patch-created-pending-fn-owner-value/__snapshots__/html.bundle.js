// tags/card.marko
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.fn,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a2: "a2; ; ",
	a3: "a3; ; ",
	a4: "a4;b%;<!><!><!>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 0));
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(_patch_text($scope3_id, "a", v, void 0, $scope0_reason, 1));
			$scope0_page && _scope($scope3_id, {});
		}, 1, "a2", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a5" : "a6");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a6", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		card_default({ fn: _bind_resume(function() {
			return "f:" + input.label;
		}, "a0", $scope1_id) });
		$scope1_page && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope)
		}), "a1", _write_guard($scope0_reason, 0));
		_write_guard($scope0_reason, 0) || _resume_branch($scope1_id);
	}, void 0, "a7", void 0, "a4", 1);
	$scope0_page && _scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	});
}, 1);
