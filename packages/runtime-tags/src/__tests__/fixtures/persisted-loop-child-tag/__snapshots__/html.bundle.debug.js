// tags/row.marko
const $template$1 = "<li><!><!></li>";
const $walks$1 = "D%b%l";
_shells({ "__tests__/tags/row.marko": "__tests__/tags/row.marko;D%b%;<li><!><!></li>" });
var row_default = _template_persisted("__tests__/tags/row.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "#text/0", input.item.name, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}<!>${_patch_text($scope0_id, "#text/1", input.item.hot ? " 🔥" : "", $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</li>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/row.marko", 0);
}, 0, 0);

// template.marko
const $template = "<ul></ul><button> </button>";
const $walks = " b D l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b D ;<ul></ul><button> </button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason({
			0: _mask_group($scope0_owned, 0),
			1: _mask_group($scope0_owned, 0)
		});
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		row_default({ item });
		writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
	}, (item) => item.id, $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [row_default]);
