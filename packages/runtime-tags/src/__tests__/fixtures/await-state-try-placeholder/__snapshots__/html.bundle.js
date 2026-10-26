// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "a", input.label, _write_guard($scope0_reason, 1))}:${_text_resume($scope3_id, "b", x, 2)}</p>`);
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
				});
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", 0);
				_resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_show, $wg__input_show);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		i: $n__closures
	});
}, 1);
