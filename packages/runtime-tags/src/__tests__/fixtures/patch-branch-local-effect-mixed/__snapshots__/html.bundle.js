// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: "a0;D l%;<p> </p><!><!>",
	a1: "a1 !a2,<span>inner</span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_suffix = _write_if($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "wc", label, !_server_guard($scope0_reason, 2));
			_html(`<p>${_patch_text($scope1_id, "a", label, void 0, $scope0_reason, 2)}</p>`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html("<span>inner</span>");
					_script($scope2_id, "a2", 0);
					(_server_guard($scope0_reason, 4) || _server_guard($scope0_reason, 2)) && _patch_effect($scope2_id, "ea2", "1 c 2 g");
					_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, "a3");
					_subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 4) && "a3", 0);
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a1"], $scope0_reason, 3);
			_scope($scope1_id, {
				c: label,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.title,
		f: _unfilled_if($scope0_reason, 1) && input.inner,
		g: input.suffix,
		j: $wi__input_suffix && $input_suffix__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.inner, !_server_guard($scope0_reason, 3), 1), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "wg", input.suffix, !_server_guard($scope0_reason, 4)));
}, 1);
