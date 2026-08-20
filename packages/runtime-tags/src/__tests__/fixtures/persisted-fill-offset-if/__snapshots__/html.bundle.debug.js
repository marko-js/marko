// template.marko
const $template = "<main><h1> </h1><!><button>+</button></main>";
const $walks = "E l%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><h1> </h1><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_title#8/init __tests__/template.marko_2_count#9/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.heading, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>${_escape(input.title + "@" + count)}${_el_resume($scope2_id, "#text/0")}</p>`);
					_subscribe($count__closures, _subscribe(_source_if($scope0_reason, 4) && $input_title__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6")));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["__tests__/template.marko_2*shell"]);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_inner: input.inner,
		input_title: input.title,
		count,
		"ClosureScopes:input_title": $input_title__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 4) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
