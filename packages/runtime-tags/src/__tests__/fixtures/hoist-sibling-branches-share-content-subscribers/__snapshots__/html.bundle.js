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
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $wrap_content__subscribers = /* @__PURE__ */ new Set();
	_hoist($scope0_id, "a1");
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	wrap_default({ content: _content("a4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.a) {
				const $scope2_id = _scope_id();
				_html(`<p></p>${_el_resume($scope2_id, "a")}`);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_a, 0, 0, 1);
		_if(() => {
			if (input.b) {
				const $scope3_id = _scope_id();
				_html(`<span></span>${_el_resume($scope3_id, "a")}`);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "b", 1, $wg__input_b, 0, 0, 1);
		_subscribe($wi__input_b && $input_b__closures, _subscribe($wi__input_a && $input_a__closures, _subscribe($wrap_content__subscribers, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) })), "a2", $wg__input_a || $wg__input_b), "a3", $wg__input_a || $wg__input_b);
		$wg__input_a || $wg__input_b || _resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>set</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		B1: $wrap_content__subscribers,
		g: $wi__input_a && $input_a__closures,
		h: $wi__input_b && $input_b__closures
	});
}, 1);
