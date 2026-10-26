// a.marko
_shells({ a: "a,<h1>A</h1>" });
var a_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
});

// b.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1",
	b2: "b2;D ;<p> </p>",
	b3: "b3;b%;<!><!><!>",
	b: "b !b6; b%;<button>go</button><!><!>"
});
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</p>`);
			$scope0_page && _scope($scope3_id, {});
		}, 1, "b0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "b4" : "b5");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "b5", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "b1", void 0, "b3", 1, void 0, 2);
	_script($scope0_id, "b6");
	$scope0_page && _scope($scope0_id, { f: $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures });
});

// template.marko
_shells({ c: "c !;D%;<main><!></main>" });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page__OR__input_promise = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.page === "b" ? b_default : a_default, { promise: input.promise }, 0, 0, $wg__input_page__OR__input_promise, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.page,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.promise
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_promise && _patch_fill($scope0_id, "vc0", input.page, !_server_guard($scope0_reason, 1)), $cg__input_promise && _content_withhold(input.page), _filled_guard($scope0_reason, 2) && $cg__input_page && _patch_fill($scope0_id, "vc1", input.promise, !_server_guard($scope0_reason, 2)), $cg__input_page && _content_withhold(input.promise));
}, 1);
