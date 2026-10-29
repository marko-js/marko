// tags/outer.marko
const $template = "<button>plain</button><p> </p><div> </div><i></i><section><!----></section><!><em>shown</em><!><title></title>";
const $walks = " bD lD l bD l%c%b b";
const $setup = [["b2"], ["b0"]];
_shells({ b: "b b2!b0; bD lD l bD l%c%b ;<button>plain</button><p> </p><div> </div><i></i><section><!----></section><!><em>shown</em><!><title></title>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "m")}</p><div>${_html_resume($scope0_id, "c", f(input.label), 1, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, 1, "m")}</div><i${_attr("title", f(input.label), $scope0_id, "ad$title", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m")}${_attr_class(f(input.label), $scope0_id, "ad$class", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m")}${_attr_style({ color: f(input.label).length > 3 ? "red" : "blue" }, $scope0_id, "ad$style", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m")}></i>${_el_resume($scope0_id, "d")}<section><!--${_escape_comment(f(input.label), $scope0_id, "me", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m") || " "}-->${_el_resume($scope0_id, "e")}</section>`);
	const $show = f(input.label) !== "w-c";
	_show_start($show, 0);
	_html("<em>shown</em>");
	_show_end($scope0_id, "g", $show, 1, 0, 0, 1, 6, 5, void 0, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m");
	_html(`<title>${_escape(f(input.label), $scope0_id, "mh", (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "m")}</title>${_el_resume($scope0_id, "h")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "wm", f, 1);
	_scope($scope0_id, {
		l: input.label,
		m: _unfilled_if($scope0_reason, 1) && f
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		f: _unfilled_if($scope0_reason, 0) && wrap
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
