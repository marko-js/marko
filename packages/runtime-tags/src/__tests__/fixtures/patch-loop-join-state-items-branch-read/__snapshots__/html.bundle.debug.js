// tags/child.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%b%;<!><!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<i> </i>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_items = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<i>${_patch_text($scope1_id, "#text/0", input.b, void 0, $scope0_reason, 3)}</i>`);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:5/init");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_reason, 2);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 4) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope2_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 4));
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "#text/0", d, void 0, $scope0_reason, 1)}</p>`);
		(_filled_guard($scope0_reason, 3) && !$cg__input_items || _filled_guard($scope0_reason, 4)) && _patch_join_init($scope2_id, "__tests__/tags/child.marko_2_input_b#0:5_item#2/init", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">input_b", _filled_guard($scope0_reason, 4) && "item");
		$scope0_page && _scope($scope2_id, {
			item: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "4:2", { item: "4:6" });
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_2*shell", $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, { input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b }, "__tests__/tags/child.marko", 0, { input_b: ["input.b"] }) : _filled_guard($scope0_reason, 3) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.b) : _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button><button class=s>s</button>`)($template$1, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let show = true;
	_set_scope_reason(570 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	child_default({
		b: input.b,
		items: list,
		show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 3) << 9);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1", 1);
	child_default({
		b: input.b,
		items: input.items,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/2")}<button class=s>s</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		list,
		show,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		show: "2:6"
	});
}, 1);
