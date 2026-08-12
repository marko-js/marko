// tags/box/index.marko
var box_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0));
	_html("</div>");
	input.content && _patch_poison($scope0_id);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let open = false;
	let count = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>+</button>${_el_resume($scope0_id, "b")}<button class=bump>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.a,
		h: open,
		i: count,
		j: $input_a__closures,
		k: $count__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.a);
	_resume_branch($scope0_id);
}, 1, () => [box_default]);
