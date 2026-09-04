// tags/box/index.marko
_shells({ b: "b;D%;<div class=box><!></div>" });
var box_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.show,
		f: input.title,
		g: open,
		i: $input_title__closures,
		h: $input_show__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.show), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.title));
}, 1, () => [box_default]);
