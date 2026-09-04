// template.marko
const $template = "<main><h1> </h1><!><button>Count <!></button></main>";
const $walks = "E l%b Db%m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#8/init;Db%;<p>Seen <!> times</p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>Seen ${_text_resume($scope1_id, "#text/0", count, 2)} times</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`<button>Count ${_text_resume($scope0_id, "#text/3", count, 2)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, 0);
