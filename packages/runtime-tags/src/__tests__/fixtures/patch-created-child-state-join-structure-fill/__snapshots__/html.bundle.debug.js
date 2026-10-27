// tags/child/index.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $setup$1 = [["__tests__/tags/child/index.marko_0_input_x#5_n#6/init"], ["__tests__/tags/child/index.marko_0"]];
_shells({
	"__tests__/tags/child/index.marko": "__tests__/tags/child/index.marko __tests__/tags/child/index.marko_0_input_x#5_n#6/init!__tests__/tags/child/index.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/tags/child/index.marko_1*shell": "__tests__/tags/child/index.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "#text/0", input.x, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/child/index.marko_1_input_x#0:5/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child/index.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/tags/child/index.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child/index.marko_0");
	_script($scope0_id, "__tests__/tags/child/index.marko_0_input_x#5_n#6");
	$sg__input_x && _patch_effect($scope0_id, "PatchQueuedEffect:__tests__/tags/child/index.marko_0_input_x#5_n#6", "input_x");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child/index.marko_fill1", n, 1);
	_scope($scope0_id, {
		input_x: input.x,
		n
	}, "__tests__/tags/child/index.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child/index.marko_fill0", input.x, !$sg__input_x) : _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			child_default({
				x: input.x,
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_x#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_more#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_x: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		input_more: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.more
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_more: ["input.more"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.more, !_server_guard($scope0_reason, 3)));
}, 1);
