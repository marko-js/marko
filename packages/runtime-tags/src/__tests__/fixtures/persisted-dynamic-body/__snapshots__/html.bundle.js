// box-a.marko
_shells({ a: "a;D%;<div class=a><!></div>" });
var box_a_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=a>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// box-b.marko
_shells({ b: "b;D%;<p class=b><!></p>" });
var box_b_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<p class=b>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</p>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	c0: "c0; ; ",
	c: "c;D%;<main><!></main>"
});
var template_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_patch_dynamic_tag($scope0_id, "a", input.mode === "a" ? box_a_default : box_b_default, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", input.mode === "a" ? box_a_default : box_b_default, {}, _content_elide("c0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(_patch_text($scope1_id, "a", input.text, void 0, $scope0_owned, 1));
		_subscribe(_source_if($scope0_reason, 1) && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _source_guard($scope0_reason, 0), 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		e: input.text,
		f: $input_text__closures
	});
}, 1, 1);
