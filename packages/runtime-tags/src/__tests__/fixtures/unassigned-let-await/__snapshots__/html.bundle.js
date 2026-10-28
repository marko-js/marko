// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_await($scope0_id, "a", Promise.resolve(x), (r) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_escape(r)} ${_text_resume($scope1_id, "b", input.w, $wg__input_w * 2)}</p>`);
		$wi__input_w && _subscribe($input_w__closures, _scope($scope1_id, {}), "a0", $wg__input_w);
		$wg__input_w || $wi__input_w && _resume_branch($scope1_id);
	}, $wg__input_w);
	$wi__input_w && _scope($scope0_id, { g: $input_w__closures });
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
