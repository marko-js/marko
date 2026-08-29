// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_suffix#6/init __tests__/template.marko_2_count#7/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 2), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				_owned_guard($scope0_owned, 2) ? _patch_value($scope2_id, "__tests__/template.marko1", item) : _patch_init($scope2_id, "__tests__/template.marko_2_input_items#5/init");
				_html(`<p>${_text_resume($scope2_id, "#text/0", item + ":" + input.suffix + "@" + count)}</p>`);
				_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_suffix__closures, _scope($scope2_id, {
					item,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:6", { item: "4:10" })));
			}, (item) => item, $scope1_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_2*shell");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_items: input.items,
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix": $input_suffix__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 3) && _patch_value($scope0_id, "__tests__/template.marko0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
