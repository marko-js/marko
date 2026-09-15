// tags/tagged/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/tagged/index.marko": "__tests__/tags/tagged/index.marko;D ;<span> </span>" });
var tagged_default = _template_patch("__tests__/tags/tagged/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/tagged/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell __tests__/template.marko_1_count#5/init;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_filled_guard($scope0_reason, 0) ? _patch_value($scope1_id, "__tests__/template.marko0", item?.id) : _patch_init($scope1_id, "__tests__/template.marko_1_input_rows#4/init");
		_set_serialize_reason(6);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		tagged_default({ label: `${item.id}:${count}` });
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { item_id: ["item.id", "3:10"] });
	}, 0, $scope0_id, "#text/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, () => [tagged_default]);
