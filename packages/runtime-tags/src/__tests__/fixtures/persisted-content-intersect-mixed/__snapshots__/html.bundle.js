// tags/box/index.marko
_shells({ b: "b;D%;<div class=box><!></div>" });
var box_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a1;D%b b D ;<main><!><button class=toggle>+</button><button class=bump> </button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let open = false;
	let count = 0;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>+</button>${_el_resume($scope0_id, "b")}<button class=bump>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		g: input.a,
		h: open,
		i: count,
		j: $input_a__closures,
		k: $count__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.a);
}, 1, () => [box_default]);
