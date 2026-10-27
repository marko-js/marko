// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;Eb%l%;<main><p>last <!></p><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><p>last ${_text_resume($scope0_id, "#text/0", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_start#0:5/init");
			const $countChange = _resume(function(next) {
				last = next;
			}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0;
			_patch_let_change($scope1_id, "PatchFill:__tests__/template.marko_fill1", count, "PatchWrite:TagVariableChange:count", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": $countChange
			}, "__tests__/template.marko", "4:4", {
				count: "5:10",
				"TagVariableChange:count": ["countChange", "5:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, { input_start: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.start }, "__tests__/template.marko", 0, { input_start: ["input.start"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.start, !_server_guard($scope0_reason, 1));
}, 1);
