// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#6/init;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (count > 1) {
					const $scope2_id = _scope_id();
					_html(`<p>${_text_resume($scope2_id, "#text/0", input.title)}</p>`);
					_subscribe(_source_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
