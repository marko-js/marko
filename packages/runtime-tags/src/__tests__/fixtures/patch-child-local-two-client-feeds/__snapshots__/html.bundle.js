// tags/child.marko
const $template = "<div><!><button id=c>c</button></div>";
const $walks = "D%b l";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3;D%b ;<div><!><button id=c>c</button></div>",
	b2: "b2 b8;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_other = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_other = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 4), $fg__input_other = _filled_guard($scope0_reason, 5), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_label__OR__input_other = _filled_guard($scope0_reason, 2);
			const l = input.label + input.other + "!";
			$fg__input_label__OR__input_other && _patch_write($scope1_id, "xc", l, !_server_guard($scope0_reason, 2));
			_html(`<p>${_text_mark($scope1_id, "a", l + "#0")}</p>`);
			_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 4) ? " >f" : "") + (_filled_guard($scope0_reason, 5) ? " >g" : "")).slice(1), $scope0_reason, 2);
			_patch_render($scope1_id, "b1", $fg__input_label__OR__input_other && "c");
			_scope($scope1_id, {
				c: l,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["b2"], $scope0_reason, 3);
	_html(`<button id=c>c</button>${_el_mark($scope0_id, "b")}</div>`);
	_script($scope0_id, "b3");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "b4", "f");
	$fg__input_other && $cg__input_show && _patch_render($scope0_id, "b5", "g");
	_patch_fill($scope0_id, "vb6", c, 1);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && ($ui__input_show__OR__input_other || $ui__input_label__OR__input_other) && input.label,
		g: _write_if($scope0_reason, 0) && ($ui__input_show__OR__input_label || $ui__input_label__OR__input_other) && input.other,
		h: c
	}) || ($fg__input_label && $ui__input_show__OR__input_other && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)), $fg__input_other && $ui__input_show__OR__input_label && _patch_write($scope0_id, "xg", input.other, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_scope_reason(2622 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		show: input.show,
		label: "Y",
		other: "B"
	});
	_patch_child_end();
	_html(`<button id=p>p</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
