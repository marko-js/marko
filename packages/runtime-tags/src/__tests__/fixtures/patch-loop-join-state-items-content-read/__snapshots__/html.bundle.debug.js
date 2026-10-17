// tags/child.marko
const $template$1 = "<section></section><!><!>";
const $walks$1 = " b%c";
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content,",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !; b%;<section></section><!><!>",
	"__tests__/tags/child.marko_2*shell": "__tests__/tags/child.marko_2*shell;D ;<p> </p>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_b = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const frag = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<i>${_patch_text($scope1_id, "#text/0", input.b, void 0, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "__tests__/tags/child.marko_1_input_b#0:4/init" : "__tests__/tags/child.marko_1_input_b#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "1:2"));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "#section/0", _mask_group($scope0_reason, 4))}`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "#text/0", d, void 0, $scope0_reason, 1)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/tags/child.marko_2_input_b#0:4_item#2/init");
		_scope($scope2_id, {
			item: $wi__input_b && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "3:2", { item: "3:6" });
	}, 0, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/tags/child.marko_2*shell", $scope0_reason, 5);
	_patch_write($scope0_id, "PatchWrite:frag_content", frag?.content, 1);
	_client_guard($scope0_reason, 4) && _patch_init($scope0_id, "__tests__/tags/child.marko_0_input_mode#5_frag_content#8/init");
	$scope0_page ? _scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		frag_content: _unfilled_if($scope0_reason, 4) && frag?.content,
		"ClosureScopes:input_b/10": $wi__input_b && $input_b__closures
	}, "__tests__/tags/child.marko", 0, {
		input_b: ["input.b"],
		frag_content: ["frag.content", "1:9"]
	}) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 5) ? _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/unpatched", input.b) : _content_withheld("__tests__/tags/child.marko_1*content") && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/tags/child.marko_fill0/content", input.b));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b b`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b b`)($walks$1)};${((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let m = false;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		b: input.b,
		items: list,
		mode: m
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}<button class=m>m</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", list, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", m, 1);
	$scope0_page && _scope($scope0_id, {
		list,
		m,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		m: "2:6"
	});
}, 1);
