// template.marko
_shells({
	a1: "a1;D%c%;<p><!>:<!></p>",
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3 a5;b%;<!><!><!>",
	a: "a !a7; b%;<button class=open>inc</button><!><!>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_mark($scope3_id, "a", input.label, 1, $scope0_reason, 2)}:${_text_mark($scope3_id, "b", x, 2)}</p>`);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "a0", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, {}), $cg__input_label && "a0");
				}, 1, "a1", 1);
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a5", 0);
				_resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a6", void 0, "a3");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a4"], $scope0_reason, 1);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && ($ui__input_show || $ui__input_label) && input.label,
		g: n,
		h: $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		i: $n__closures
	}) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a8", "f");
}, 1);
