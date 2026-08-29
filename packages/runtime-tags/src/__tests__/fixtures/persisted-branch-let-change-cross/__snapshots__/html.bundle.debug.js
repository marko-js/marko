// template.marko
const $template = "<main><h1> </h1><p>Last <!></p><!></main>";
const $walks = "E lDb%l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E lDb%l%;<main><h1> </h1><p>Last <!></p><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	let handler = _resume((next) => {
		last = next;
	}, "__tests__/template.marko_0/handler", $scope0_id);
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h1><p>Last ${_text_resume($scope0_id, "#text/1", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", handler || void 0);
			_scope($scope1_id, {
				count,
				"TagVariableChange:count": handler || void 0
			}, "__tests__/template.marko", "6:4", {
				count: "7:10",
				"TagVariableChange:count": ["countChange", "7:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { handler }, "__tests__/template.marko", 0, { handler: "2:6" });
	_resume_branch($scope0_id);
}, 1, 0);
