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

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`depth ${_text_resume($scope1_id, "a", input.depth, $wg__input_depth * 2)}`);
		_subscribe($wi__input_depth && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_depth);
		$wg__input_depth || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.depth,
		e: $wi__input_depth && $input_depth__closures
	});
}, 1);
