// tags/child.marko
const $template = "<div><!><button id=c>c</button></div>";
const $walks = "D%b l";
const $setup$1 = [[], ["b4"]];
_shells({
	b: "b !b4;D%b ;<div><!><button id=c>c</button></div>",
	b3: "b3 b9;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let c = 0;
	_html("<div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const l = input.label + input.other + "!";
			_filled_guard($scope0_reason, 2) ? _patch_fill($scope1_id, "vb0", l) : (_patch_init($scope1_id, "b1"), _patch_init($scope1_id, "b2"));
			_html(`<p>${_text_resume($scope1_id, "a", l + "#0")}</p>`);
			$scope0_page && _scope($scope1_id, {
				c: l,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["b3"], $scope0_reason, 3);
	_html(`<button id=c>c</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b4");
	_patch_fill($scope0_id, "vb7", c, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.label,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.other,
		h: c
	}) : (_filled_guard($scope0_reason, 4) && ($cg__input_show || _client_guard($scope0_reason, 5)) && _patch_fill($scope0_id, "vb5", input.label, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && ($cg__input_show || _client_guard($scope0_reason, 4)) && _patch_fill($scope0_id, "vb6", input.other, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<main>");
	_set_scope_reason(2622 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		show: input.show,
		label: "Y",
		other: "B"
	});
	_patch_child_end();
	_html(`<button id=p>p</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
