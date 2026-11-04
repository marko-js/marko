// tags/reader.marko
_shells({ b: "b; b ;<button class=call>call</button><pre></pre>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_mark($scope0_id, "a")}<pre></pre>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0", 1, $fg__input_fn);
	_scope($scope0_id, { e: input.fn }) || $fg__input_fn && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a;b%;<output id=out></output><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_hide__OR__input_title = _write_guard($scope0_reason, 0), $ui__input_title = _unfilled_if($scope0_reason, 2), $fg__input_hide = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 2));
	_html("<output id=out></output>");
	_dynamic_tag($scope0_id, "a", input.hide ? null : reader_default, { fn: _bind_resume(function() {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "a0", $scope0_id) }, 1, 0, 0, $wg__input_hide__OR__input_title, $scope0_reason, 0);
	_patch_render($scope0_id, "a1", (($fg__input_hide ? " d" : "") + ($fg__input_title ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_title || _unfilled_if($scope0_reason, 0)) && input.hide,
		e: input.title
	}) || $fg__input_hide && $ui__input_title && _patch_write($scope0_id, "xd", input.hide, !_server_guard($scope0_reason, 1));
}, 1);
