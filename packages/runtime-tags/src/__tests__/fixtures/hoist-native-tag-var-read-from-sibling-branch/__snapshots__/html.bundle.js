// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $out__closures = /* @__PURE__ */ new Set();
	let out = "";
	_if(() => {
		if (input.a) {
			const $scope3_id = _scope_id();
			_html(`<div>a</div>${_el_resume($scope3_id, "a")}`);
			_scope($scope3_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			{
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "b", out)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_subscribe($out__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
			}
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_a);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && out,
		f: $out__closures
	});
	$wg__input_a || _resume_branch($scope0_id);
}, 1);
