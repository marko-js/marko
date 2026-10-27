// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%;<div><!> done</div>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ;<section></section>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%;<div><!> done</div>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_items__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const $for_content__item_msg__closures = new Set();
			_await($scope3_id, "#text/0", item.promise, () => {
				const $scope4_id = _scope_id();
				_html(`<div>${_patch_text($scope4_id, "#text/0", item.msg, void 0, $scope0_reason, 0)} done</div>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope4_id, $cg__input_items ? "__tests__/template.marko_4_item_msg#3:4/init" : "__tests__/template.marko_4_item_msg#3:4/subscribe");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_msg__closures, _scope($scope4_id, {}, "__tests__/template.marko", "6:8"), $cg__input_items && "__tests__/template.marko_4_item_msg#3:4/subscribe");
			}, 1, "__tests__/template.marko_4*content");
			$scope0_page && $wi__input_items && _scope($scope3_id, { "ClosureScopes:item_msg/8": _unfilled_if($scope0_reason, 0) && $for_content__item_msg__closures }, "__tests__/template.marko", "5:6");
		}, "id", $scope1_id, "#section/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_reason, 0);
		_html(`</section>${_el_resume($scope1_id, "#section/0")}`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_items ? "__tests__/template.marko_1_input_items#0:5/init" : "__tests__/template.marko_1_input_items#0:5/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_items__closures, _scope($scope1_id, { _: $wi__input_items && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), $cg__input_items && "__tests__/template.marko_1_input_items#0:5/subscribe");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"ClosureScopes:input_items/7": $wi__input_items && _unfilled_if($scope0_reason, 0) && $input_items__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
