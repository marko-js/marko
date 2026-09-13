// box-a.marko
_shells({ a: "a;D%;<div class=a><!></div>" });
var box_a_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div class=a>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// box-b.marko
_shells({ b: "b;D%;<p class=b><!></p>" });
var box_b_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<p class=b>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</p>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	c0: "c0; ; ",
	c: "c;D%;<main><!></main>"
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_mode = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	const $tag = input.mode === "a" ? box_a_default : box_b_default;
	_dynamic_tag($scope0_id, "a", $tag, {}, _content_elide("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(_patch_text($scope1_id, "a", input.text, void 0, $scope0_reason, 2));
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $sg__input_mode, _patch_dynamic_tag($scope0_id, "a", $tag, 0, "c0", 0, $scope0_reason, 1));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.text,
		f: $input_text__closures
	});
}, 1, 1);
