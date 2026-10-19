// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.a + d, void 0, $scope0_reason, 1)}</p>`);
		_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_write($scope1_id, "PatchWrite:item", item);
		_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 4) && _patch_write($scope1_id, "PatchWrite:d", d);
		(_filled_guard($scope0_reason, 3) && !_client_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_b#0:4_item#2/init", $scope0_reason, 0);
		(_filled_guard($scope0_reason, 4) && !_client_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 0)) && _patch_join_init($scope1_id, "__tests__/tags/child.marko_1_input_a#0:5_d#4/init", $scope0_reason, 1);
		_scope($scope1_id, {
			item: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && item,
			d: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && d,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "1:2", {
			item: "1:6",
			d: "2:10"
		});
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_1*shell", $scope0_reason, 2);
	_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/unpatched", input.b) : _patch_write($scope0_id, "PatchWrite:input_b", input.b, 1);
	_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill1/unpatched", input.a) : _patch_write($scope0_id, "PatchWrite:input_a", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 0)));
	$scope0_page && _scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		input_a: ["input.a"]
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(62 | (_mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 0) << 9));
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		a: input.a,
		b: input.b,
		items: list
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", list, 1);
	$scope0_page && _scope($scope0_id, {
		list,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
