// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b%;<button>+</button><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_count#2/init;Db%;<p>Seen <!></p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_inner = _source_guard($scope0_reason, 3), $sg__input_outer = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>+</button>${_el_resume($scope1_id, "#button/0")}`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>Seen <!>${_escape(count)}${_el_resume($scope2_id, "#text/0")}</p>`);
					writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6");
					return 0;
				}
			}, $scope1_id, "#text/1", 1, $sg__input_inner, $sg__input_inner, void 0, void 0, ["__tests__/template.marko_2*shell"]);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			writeScope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:4", { count: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_outer, $sg__input_outer, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { input_inner: input.inner }, "__tests__/template.marko", 0, { input_inner: ["input.inner"] });
}, 1, 0);
