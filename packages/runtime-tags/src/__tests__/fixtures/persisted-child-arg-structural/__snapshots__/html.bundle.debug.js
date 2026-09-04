// helper.ts
let thing = false;

// tags/struct/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/struct/index.marko": "__tests__/tags/struct/index.marko;b%;<!><!><!>",
	"__tests__/tags/struct/index.marko_1*shell": "__tests__/tags/struct/index.marko_1*shell,<div>a</div>",
	"__tests__/tags/struct/index.marko_2*shell": "__tests__/tags/struct/index.marko_2*shell,<span>b</span>"
});
var struct_default = _template_persisted("__tests__/tags/struct/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_mode = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode) {
			const $scope1_id = _scope_id();
			_html("<div>a</div>");
			$scope0_reason && _scope($scope1_id, {}, "__tests__/tags/struct/index.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$scope0_reason && _scope($scope2_id, {}, "__tests__/tags/struct/index.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_mode, $sg__input_mode, void 0, void 0, ["__tests__/tags/struct/index.marko_1*shell", "__tests__/tags/struct/index.marko_2*shell"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/struct/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			struct_default({ mode: false });
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1, () => [struct_default]);
