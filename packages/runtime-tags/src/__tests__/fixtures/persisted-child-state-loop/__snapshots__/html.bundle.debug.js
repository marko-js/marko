// tags/list/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/list/index.marko": "__tests__/tags/list/index.marko !; ;<ul></ul>",
	"__tests__/tags/list/index.marko_1*shell": "__tests__/tags/list/index.marko_1*shell;D%b%;<li><!><!></li>"
});
var list_default = _template_persisted("__tests__/tags/list/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items__OR__input_suffix = _source_guard($scope0_reason, 0), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item, void 0, $scope0_owned, 1)}${_patch_text($scope1_id, "#text/1", input.suffix, 2, $scope0_owned, 2)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/list/index.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_items__OR__input_suffix, $sg__input_items, void 0, void 0, "__tests__/tags/list/index.marko_1*shell", $scope0_owned, 1);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items__OR__input_suffix)}`);
	$scope0_reason ? _scope($scope0_id, { input_suffix: input.suffix }, "__tests__/tags/list/index.marko", 0, { input_suffix: ["input.suffix"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/list/index.marko0", input.suffix);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)(" b"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	list_default({
		items: count ? ["a", "b"] : ["a"],
		suffix: input.s
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.s);
}, 1, () => [list_default]);
