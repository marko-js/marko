// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_html(`<button>set</button>${_el_resume($scope0_id, "a")}`);
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, $wg__input_w)}</p>`);
		$wi__input_w && _subscribe($input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_w);
		$wg__input_w || $wi__input_w && _resume_branch($scope1_id);
	}, $scope0_id) };
	_await($scope0_id, "b", Promise.resolve(x), (r) => {
		_scope_id();
		Body.content({});
	}, 0);
	_script($scope0_id, "a2");
	_scope($scope0_id, { h: $wi__input_w && $input_w__closures });
}, 1);
