// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let items = input.items;
	forOf(items, (v) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", Promise.resolve(v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", r + input.w, $wg__input_w)}</p>`);
			$wi__input_w && _subscribe($input_w__closures, _scope($scope2_id, { c: r }), "a0", $wg__input_w);
			$wg__input_w || $wi__input_w && _resume_branch($scope2_id);
		}, $wg__input_w);
		$wi__input_w && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	});
	$wi__input_w && _scope($scope0_id, { g: $input_w__closures });
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
