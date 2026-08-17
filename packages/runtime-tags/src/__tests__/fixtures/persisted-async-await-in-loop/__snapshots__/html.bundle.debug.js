// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html$1("<main>");
	_for_of$1(input.items, (item) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", item.promise, (value) => {
			const $scope2_id = _scope_id();
			_html$1(`<em>${_patch_text($scope2_id, "#text/0", value, $scope0_owned, 0)}${_el_resume($scope2_id, "#text/0")}</em>`);
			writeScope($scope2_id, {}, "__tests__/template.marko", "3:6");
		}, void 0, "__tests__/template.marko_1_#text#0/await");
		$scope0_reason && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell");
	_html$1(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
