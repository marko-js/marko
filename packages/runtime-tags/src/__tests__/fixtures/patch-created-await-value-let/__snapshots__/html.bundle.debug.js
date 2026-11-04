// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2; D%c%;<button><!> <!></button>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await !__tests__/template.marko_2; D%c%;<button><!> <!></button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 1)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.value, (v) => {
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_text_mark($scope2_id, "#text/1", open ? "close" : "open")} ${_text_mark($scope2_id, "#text/2", v, 2, $scope0_reason, 3)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill0", open, 1);
				_scope($scope2_id, { open }, "__tests__/template.marko", "4:6", { open: "5:12" });
			}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 3) && 3);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_value#0:6/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_html("</main>");
	$fg__input_value && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_value#0:6/setup", "input_value");
	_scope($scope0_id, { input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.value }, "__tests__/template.marko", 0, { input_value: ["input.value"] }) || $fg__input_value && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 3));
}, 1);
