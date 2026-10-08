// a.marko
_shells({ a: "a,<h1>A</h1>" });
var a_default = _template_patch("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<h1>A</h1>");
});

// b.marko
_shells({
	b0: "b0;D ;<p> </p>",
	b1: "b1;D ;<p> </p>",
	b2: "b2;b%;<!><!><!>",
	b: "b !b6; b%;<button>go</button><!><!>"
});
var b_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope3_id, {});
		}, 1, "b0", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "b3");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b4", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("Loading");
	}, void 0, "b5", void 0, "b2", 1);
	_script($scope0_id, "b6");
	$scope0_page && _scope($scope0_id, { f: _unfilled_if($scope0_reason, 0) && $input_promise__closures });
});

// template.marko
_shells({ c: "c !;D%;<main><!></main>" });
var template_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page__OR__input_promise = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.page === "b" ? b_default : a_default;
	const $input2 = { promise: input.promise };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $wg__input_page__OR__input_promise, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	_patch_write($scope0_id, "d", input.page, 1);
	_patch_write($scope0_id, "e", input.promise, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.page,
		e: _source_if($scope0_reason, 1) && input.promise
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "c0", input.page), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "c1", input.promise));
}, 1);
