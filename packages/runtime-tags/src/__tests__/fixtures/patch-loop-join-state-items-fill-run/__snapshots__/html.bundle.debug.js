// tags/child.marko
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;b%b%b ;<!><!><!><button class=t>t</button>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $scope0_page = _page_render(), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "#text/0", input.b, $wg__input_b)}</i>`);
			$scope0_page && _scope($scope1_id, {}, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "#text/0", d, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 1) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope2_id, "__tests__/tags/child.marko_2_input_b#0:5_item#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">input_b", _filled_guard($scope0_reason, 2) && "item");
		$scope0_page && _scope($scope2_id, {
			item: _write_if($scope0_reason, 1) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "5:2", { item: "5:6" });
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_2*shell", $scope0_reason, 2);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		input_b: input.b,
		open
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		open: "1:6"
	}) : _filled_guard($scope0_reason, 1) && ($cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0/unpatched", input.b) : _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		b: input.b,
		items: list
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		list,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
