// template.marko
_shells({
	a: "a !;b%b ;<!><!><style></style>",
	a3: "a3 !a0; b ;<style>p.s { color: red }</style><style>p.t { color: green }</style>",
	a2: "a2,<p>a</p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_page = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.page === 0) {
			const $scope2_id = _scope_id();
			_html("<p>a</p>");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope2_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			_html(`<style${_attr_nonce()}>p.s { color: red }</style><style${_patch_attrs({
				nonce: _patch_nonce(),
				...input.attrs
			}, "b", $scope1_id, "style", 2, $scope0_reason, 1)}>p.t { color: green }</style>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 1;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2", "a3"], $scope0_reason, 0);
	_html(`<style${_patch_attrs({
		nonce: _patch_nonce(),
		...input.attrs
	}, "b", $scope0_id, "style", 2, $scope0_reason, 1)}>${_patch_text_content($scope0_id, "mb", `p.u { --page: ${_to_text(input.page)} }`, _escape_style, $scope0_reason, 0)}</style>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.attrs }) : (_filled_guard($scope0_reason, 1) && $cg__input_page && _patch_fill($scope0_id, "va5", input.attrs, !_server_guard($scope0_reason, 1)), $cg__input_page && _content_withhold(input.attrs));
}, 1);
