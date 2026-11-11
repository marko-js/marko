// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_count#0:8/subscribe;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 3), $wg__input_inner = _write_guard($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_inner = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const $count__closures = new Set();
	const $input_items__closures = new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_for_of(input.items, (item) => {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_mark($scope3_id, "#text/0", item + ":" + input.suffix + "@" + count)}</p>`);
						_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_suffix#0:7/subscribe");
						_patch_render($scope3_id, "__tests__/template.marko_3_input_suffix#0:7_count#0:8/setup", _filled_guard($scope0_reason, 4) && ">>>input_suffix");
						_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_suffix__closures, _scope($scope3_id, {
							"#LoopKey": item,
							_: _scope_with_id($scope2_id)
						}, "__tests__/template.marko", "5:8", { "#LoopKey": "5:12" }), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_suffix#0:7/subscribe"), "__tests__/template.marko_3_count#0:8/subscribe");
					}, (item) => item, $scope2_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 3);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_items#0:6/subscribe", $cg__input_items);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), $cg__input_items && "__tests__/template.marko_2_input_items#0:6/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_inner, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			$cg__input_inner && _patch_render($scope1_id, "__tests__/template.marko_1_input_inner#0:5/setup");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_inner && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_inner#0:5/setup", "input_inner");
	_scope($scope0_id, {
		input_inner: _write_if($scope0_reason, 1) && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.inner,
		input_items: _write_if($scope0_reason, 0) && input.items,
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix/11": _write_if($scope0_reason, 4) && $input_suffix__closures,
		"ClosureScopes:count/12": $count__closures,
		"ClosureScopes:input_items/10": _write_if($scope0_reason, 3) && $input_items__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_items: ["input.items"],
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) || ($fg__input_inner && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_inner", input.inner, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 3)) && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_items#6/subscribers", "input_items"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 4)) && ($cg__input_show || $cg__input_inner || $cg__input_items) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_suffix#7/subscribers", "input_suffix"));
}, 1);
