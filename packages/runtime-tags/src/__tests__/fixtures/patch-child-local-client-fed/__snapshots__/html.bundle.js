// tags/child.marko
const $template = "<div><!><button id=c>c</button></div>";
const $walks = "D%b l";
const $setup$1 = [[], ["b3"]];
_shells({
	b: "b !b3;D%b ;<div><!><button id=c>c</button></div>",
	b2: "b2 b6;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label2 = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_label = _filled_guard($scope0_reason, 1);
			const l = input.label + "!";
			$fg__input_label && _patch_write($scope1_id, "xb", l, !$sg__input_label);
			_html(`<p>${_text_mark($scope1_id, "a", l + "#0")}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_patch_render($scope1_id, "b1", $fg__input_label && "b");
			_scope($scope1_id, {
				b: l,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["b2"], $scope0_reason, 0);
	_html(`<button id=c>c</button>${_el_mark($scope0_id, "b")}</div>`);
	_script($scope0_id, "b3");
	$fg__input_label2 && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "f");
	_patch_fill($scope0_id, "vb4", c, 1);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: c
	}) || $fg__input_label2 && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !$sg__input_label);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		show: input.show,
		label: "Y"
	});
	_patch_child_end();
	_html(`<button id=p>p</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
