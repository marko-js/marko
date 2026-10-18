// box-a.marko
_shells({ a: "a;D%;<div class=a><!></div>" });
var box_a_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div class=a>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// box-b.marko
_shells({ b: "b;D%;<p class=b><!></p>" });
var box_b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<p class=b>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</p>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	c0: "c0; ; ",
	c: "c;D%;<main><!></main>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? box_a_default : box_b_default, {}, _content_elide("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.text, void 0, $scope0_reason, 2));
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "c1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_text__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $wg__input_mode, void 0, 2, $scope0_reason, 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.text,
		f: _write_if($scope0_reason, 2) && $input_text__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc2", input.text, !_server_guard($scope0_reason, 2));
}, 1);
