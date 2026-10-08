// tags/sub.marko
const $template$2 = "<!><!><button class=inc>+</button>";
const $walks$2 = "b%b b";
_shells({
	"__tests__/tags/sub.marko": "__tests__/tags/sub.marko !__tests__/tags/sub.marko_0;b%b ;<!><!><button class=inc>+</button>",
	"__tests__/tags/sub.marko_1*shell": "__tests__/tags/sub.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/sub.marko_2*shell": "__tests__/tags/sub.marko_2*shell __tests__/tags/sub.marko_2_input_n#0:5/init __tests__/tags/sub.marko_2_g#0:6/init;D ;<span class=v> </span>"
});
var sub_default = _template_patch("__tests__/tags/sub.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $g__closures = new Set();
	let g = 10;
	_for_of(input.items, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (t.on) {
				const $scope2_id = _scope_id();
				_html(`<span class=v>${_text_resume($scope2_id, "#text/0", g - input.n)}</span>`);
				_subscribe($g__closures, _subscribe(_source_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/sub.marko", "4:4"), _client_guard($scope0_reason, 1) && "__tests__/tags/sub.marko_2_input_n#0:5/subscribe"), "__tests__/tags/sub.marko_2_g#0:6/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_items, void 0, void 0, void 0, ["__tests__/tags/sub.marko_2*shell"], $scope0_reason, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/sub.marko", "3:2");
	}, "k", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/sub.marko_1*shell", $scope0_reason, 0);
	_html(`<button class=inc>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/sub.marko_0");
	_patch_value($scope0_id, "__tests__/tags/sub.marko_fill1", g, 1);
	$scope0_page ? _scope($scope0_id, {
		input_n: input.n,
		g,
		"ClosureScopes:input_n/7": $input_n__closures,
		"ClosureScopes:g/8": $g__closures
	}, "__tests__/tags/sub.marko", 0, {
		input_n: ["input.n"],
		g: "2:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/sub.marko_fill0", input.n);
});

// tags/route-cl.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2);
_shells({ "__tests__/tags/route-cl.marko": /*@__PURE__*/ (() => `__tests__/tags/route-cl.marko;${((_w0) => `b/${_w0}&`)($walks$2)};${((_w0) => `<!>${_w0}`)($template$2)}`)() });
var route_cl_default = _template_patch("__tests__/tags/route-cl.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	sub_default({
		n: input.n,
		items: [{
			k: 1,
			on: true
		}]
	});
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/route-cl.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Route_withLoadAssets = withLoadAssets(route_cl_default, flush, "ready:__tests__/tags/route-cl.marko");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Route_withLoadAssets({ n: Number($global$1.n || 5) });
	_fill_global_subscribe("__tests__/template.marko_0_$global_n#3/global", $scope0_id);
	$scope0_page && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
