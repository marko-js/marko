// template.marko
const $template = "<main><p>last <!></p><!></main>";
const $walks = "Eb%l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;Eb%l%;<main><p>last <!></p><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_start = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><p>last ${_text_mark($scope0_id, "#text/0", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<span>Seen ${_text_mark($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_start#0:5/setup");
			const $countChange = _resume(function(next) {
				last = next;
			}, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0;
			_patch_let_change($scope1_id, "PatchFill:__tests__/template.marko_1_count#2/fill", count, "PatchWrite:TagVariableChange:count", $countChange, $scope0_reason, 1);
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
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html("</main>");
	$fg__input_start && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_start#0:5/setup", "input_start");
	_scope($scope0_id, { input_start: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.start }, "__tests__/template.marko", 0, { input_start: ["input.start"] }) || $fg__input_start && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_start", input.start, !_server_guard($scope0_reason, 1));
}, 1);
