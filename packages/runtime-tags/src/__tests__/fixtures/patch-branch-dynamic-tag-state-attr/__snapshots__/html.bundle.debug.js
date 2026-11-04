// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:6/setup;D%;<section><!></section>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_on = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.on ? "p" : "div", { "data-n": count }, 0, _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html("x");
			}, $scope1_id));
			_html("</section>");
			_patch_render($scope1_id, "__tests__/template.marko_1_input_on#0:5_count#0:6/setup", _filled_guard($scope0_reason, 1) && ">input_on");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_on && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_on#0:5/setup", "input_on");
	_scope($scope0_id, {
		input_on: input.on,
		count
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		count: "1:6"
	}) || $fg__input_on && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 1));
}, 1);
