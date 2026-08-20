// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<p>Seen <!></p><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<p>Seen <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</p><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", _resume(function(next) {
				document.querySelector("main").dataset.attempt = String(next);
			}, "__tests__/template.marko_1/valueChange") || void 0);
			writeScope($scope1_id, {
				count,
				"TagVariableChange:count": _resume(function(next) {
					document.querySelector("main").dataset.attempt = String(next);
				}, "__tests__/template.marko_1/valueChange") || void 0
			}, "__tests__/template.marko", "3:4", {
				count: "4:10",
				"TagVariableChange:count": ["countChange", "4:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
