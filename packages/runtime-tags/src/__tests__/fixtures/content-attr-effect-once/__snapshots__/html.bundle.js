// tags/host.marko
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const extra = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		_script($scope1_id, "b1", $wg__input_label);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, extra, 0);
	_html("</div>");
	_script($scope0_id, "b3", 0);
	_scope($scope0_id, {
		d: input.label,
		e: extra,
		f: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.label,
		f: show
	});
}, 1);
