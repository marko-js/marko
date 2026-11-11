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
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_alt = _write_guard($scope0_reason, 0), $ui__input_title__OR__input_alt = _unfilled_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_alt = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const fn = _bind_resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "a0", $scope0_id);
	_html("<output id=out></output>");
	_dynamic_tag($scope0_id, "a", input.alt || reader_default, { fn }, 1, 0, 0, $wg__input_title__OR__input_alt, $scope0_reason, 0);
	_patch_render($scope0_id, "a1", (($fg__input_alt ? " e" : "") + ($fg__input_title ? " f" : "") + ($fg__input_title ? " d" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: input.title,
		e: $ui__input_title__OR__input_alt && input.alt,
		f: $ui__input_title__OR__input_alt && fn
	}) || ($fg__input_alt && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.alt, !_server_guard($scope0_reason, 2)), $fg__input_title && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", fn, !$sg__input_title));
}, 1);
