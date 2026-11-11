// template.marko
_shells({
	a: "a;D%bD ;<main><!><em> </em></main>",
	a3: "a3 !a1; ;<a>go</a>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_attrs = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<a${_attrs({
				...input.attrs,
				onClick: _resume(function() {
					count++;
				}, "a0", $scope1_id)
			}, "a", $scope1_id, "a", 0, $scope0_reason, 1)}>go</a>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<em>${_text_mark($scope0_id, "b", count)}</em></main>`);
	$fg__input_attrs && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.attrs,
		g: count
	}) || $fg__input_attrs && $ui__input_show && _patch_write($scope0_id, "xf", input.attrs, !_server_guard($scope0_reason, 1));
}, 1);
