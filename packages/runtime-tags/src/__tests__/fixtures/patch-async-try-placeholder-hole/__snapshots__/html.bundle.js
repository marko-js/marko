// template.marko
_shells({
	a2: "a2;D ;<em> </em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a: "a;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_mark($scope3_id, "a", value, 1, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a2", $ui__input_promise && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a5", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a5", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>loading ${_text_mark($scope1_id, "a", input.title, $wg__input_title * 2)}</em>`);
		_script($scope1_id, "a0", $wg__input_title, _filled_guard($scope0_reason, 0));
		$cg__input_title && _patch_render($scope1_id, "a1");
		_subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_title && "a1", $wg__input_title);
	}, void 0, "a6", void 0, "a4", 1);
	_html("</main>");
	_scope($scope0_id, {
		e: input.title,
		g: $wi__input_title && $input_title__closures,
		h: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a7", "e");
}, 1);
