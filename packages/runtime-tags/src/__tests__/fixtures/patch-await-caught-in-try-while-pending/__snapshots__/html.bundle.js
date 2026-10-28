// template.marko
_shells({
	a2: "a2",
	a3: "a3",
	a4: "a4;D%;<div id=done><!> done</div>",
	a5: "a5;D%;<div id=done><!> done</div>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;D%;<section><!></section>",
	a: "a !a10; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise__OR__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				const $scope3_id = _scope_id();
				_html(`<div id=done>${_text_resume($scope3_id, "a", input.msg, void 0, $scope0_reason, 2)} done</div>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, $cg__input_msg ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope3_id, {}), $cg__input_msg && "a1");
			}, 1, "a4", 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a8" : "a9");
			$wi__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a9", 0);
			$wi__input_promise__OR__input_msg && _resume_branch($scope2_id);
		}, void 0, () => {
			_scope_reason();
			_scope_id();
			_html("<p>oops</p>");
		}, void 0, "a2", "a6", 1, void 0, 1);
		_html("</section>");
		$wi__input_promise__OR__input_msg && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a3", void 0, "a7", 1, void 0, 2);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		h: count,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_msg__closures,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	});
}, 1);
