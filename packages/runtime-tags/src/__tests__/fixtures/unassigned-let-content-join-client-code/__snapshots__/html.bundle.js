// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0), $wi__input_name = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_name__closures = /* @__PURE__ */ new Set();
	let uid = input.id;
	wrap_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", uid + "-" + input.name, $wg__input_name)}</p>`);
		$wi__input_name && _subscribe($input_name__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_name);
		$wg__input_name || $wi__input_name && _resume_branch($scope1_id);
	}, $scope0_id) });
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: $wi__input_name && uid,
		i: n,
		j: $wi__input_name && $input_name__closures
	});
}, 1);
