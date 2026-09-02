// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_suffix#6/init __tests__/template.marko_2_count#7/init __tests__/template.marko_2_item#2/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_flag = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 1) ? _patch_value($scope1_id, "__tests__/template.marko1", item) : _patch_init($scope1_id, "__tests__/template.marko_1_input_items#4/init");
		_if(() => {
			if (input.flag) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", item + ":" + input.suffix + "@" + count)}</p>`);
				_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 3) && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6")));
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_flag, $sg__input_flag, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 2);
		_scope($scope1_id, {
			item,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:4", { item: "3:8" });
	}, (item) => item, $scope0_id, "#text/0", 1, _source_guard($scope0_reason, 0), _source_guard($scope0_reason, 1), void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_flag: input.flag,
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix": $input_suffix__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 3) && _patch_value($scope0_id, "__tests__/template.marko0", input.suffix);
	_resume_branch($scope0_id);
}, 1, 0);
