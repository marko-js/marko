// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/heading.marko
var heading_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 2), $wi__input_type__OR__input_depth = _write_if($scope0_reason, 0), $wg__input_type = _write_guard($scope0_reason, 1), $wi__input_depth = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.type, {}, _content_resume("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`depth ${_text_resume($scope1_id, "a", input.depth, $wg__input_depth * 2)}`);
		$wi__input_type__OR__input_depth && _subscribe($wi__input_depth && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c1", $wg__input_depth);
		$wg__input_depth || $wi__input_type__OR__input_depth && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ e: input.depth }]), 0, $wg__input_type);
	$wi__input_type__OR__input_depth && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.depth,
		f: $wi__input_depth && $input_depth__closures
	});
});

// template.marko
const $Card_withLoadAssets = withLoadAssets(card_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let depth = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	heading_default({
		type: $Card_withLoadAssets,
		depth
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: depth,
		b: _existing_scope($childScope)
	});
}, 1);
