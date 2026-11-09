// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a: "a;b%bD ;<!><!><p> </p>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D%;<section><!></section>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_value = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_await($scope1_id, "a", input.value, (v) => {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 2)}</b>`);
				_scope($scope2_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a3");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 3)}</p>`);
	$fg__input_value && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, { f: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.value }) || $fg__input_value && $ui__input_show && _patch_write($scope0_id, "xf", input.value, !_server_guard($scope0_reason, 2));
}, 1);
