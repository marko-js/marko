// template.marko
const $template = "<ul></ul><button> </button>";
const $walks = " b D l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b D ;<ul></ul><button> </button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1_item_attrs#4; D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li${_patch_attrs(item.attrs, "#li/0", $scope1_id, "li", $scope0_owned, 0)}>${_patch_text($scope1_id, "#text/1", item.id, void 0, $scope0_owned, 0)}</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_item_attrs#4");
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4", { "EventAttributes:#li/0": ["...item.attrs", "4:12"] });
	}, (item) => item.id, $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
