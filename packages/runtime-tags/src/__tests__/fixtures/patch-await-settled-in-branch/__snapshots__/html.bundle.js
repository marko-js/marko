// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a: "a !;b%bD ;<!><!><p> </p>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D%;<section><!></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_await($scope1_id, "a", input.value, (v) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_resume($scope2_id, "a", v, void 0, $scope0_reason, 2)}</b>`);
				_scope($scope2_id, {});
			}, 1, "a0");
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html(`<p>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 3)}</p>`);
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.value, !_server_guard($scope0_reason, 2));
}, 1);
