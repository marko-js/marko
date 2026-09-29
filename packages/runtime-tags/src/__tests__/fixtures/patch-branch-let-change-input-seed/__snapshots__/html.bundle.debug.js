// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;Eb%l%;<main><p>last <!></p><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><p>last ${_text_resume($scope0_id, "#text/0", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", _resume(function(next) {
				last = next;
			}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0);
			_scope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": _resume(function(next) {
					last = next;
				}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0
			}, "__tests__/template.marko", "4:4", {
				count: "5:10",
				"TagVariableChange:count": ["countChange", "5:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { input_start: _source_if($scope0_reason, 1) && input.start }, "__tests__/template.marko", 0, { input_start: ["input.start"] });
}, 1, 0);
