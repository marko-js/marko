// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_0_n#2/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&`)($walks$1)};${((_w0) => `<!><!>${_w0}`)($template$1)}`,
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items__OR__input_a = _server_guard($scope0_reason, 0), $wg__input_x = _write_guard($scope0_reason, 4), $wi__input_x = _write_if($scope0_reason, 4), $cg__input_x = _client_guard($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 2), $ui__input_items = _unfilled_if($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_x = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_x = _unfilled_if($scope0_reason, 4), $fg__input_items__OR__input_a = _filled_guard($scope0_reason, 0), $ui__input_items__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && _unfilled_if($scope0_reason, 3) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 2));
		const v = input.a + item;
		$fg__input_items__OR__input_a && $ui__input_x && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !$sg__input_items__OR__input_a);
		const g = _bind_resume(function() {
			return v;
		}, "__tests__/template.marko_1/g", $scope1_id);
		$fg__input_items__OR__input_a && $ui__input_x && _patch_write($scope1_id, "PatchMarkedWrite:g", g, !$sg__input_items__OR__input_a);
		_if(() => {
			if (input.x) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", g(), 1, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "__tests__/template.marko_2_g#1:5/setup");
				_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_x, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 4);
		$fg__input_items__OR__input_a && $cg__input_x && _patch_render($scope1_id, "__tests__/template.marko_2_g#1:5/setup", "g v");
		$cg__input_x && _patch_render($scope1_id, "__tests__/template.marko_1_input_x#0:6/setup");
		_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:5_item#2/setup", ((_filled_guard($scope0_reason, 3) ? " >input_a" : "") + ($fg__input_items ? " item" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			item: _write_if($scope0_reason, 3) && $ui__input_items__OR__input_a && item,
			v: $wi__input_x && ($ui__input_x || $ui__input_items__OR__input_a) && v,
			g: $wi__input_x && ($ui__input_x || $ui__input_items__OR__input_a) && g,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", {
			item: "1:6",
			v: "2:10",
			g: "3:10"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	counter_default({});
	_patch_child_end();
	$fg__input_a && $cg__input_items && _patch_render($scope0_id, "__tests__/template.marko_1_input_a#0:5/setup", "input_a");
	$fg__input_x && $cg__input_items && _patch_render($scope0_id, "__tests__/template.marko_1_input_x#0:6/setup", "input_x");
	_scope($scope0_id, {
		input_a: $wi__input_items && _unfilled_if($scope0_reason, 0) && input.a,
		input_x: $wi__input_items && ($ui__input_items || _unfilled_if($scope0_reason, 4)) && input.x,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_x: ["input.x"]
	}) || ($fg__input_a && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3)), $fg__input_x && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 4)));
}, 1);
