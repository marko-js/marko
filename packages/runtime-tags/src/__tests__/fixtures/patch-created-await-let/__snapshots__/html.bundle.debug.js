// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2; D%c%;<button><!> <!></button>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await !__tests__/template.marko_2; D%c%;<button><!> <!></button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.promise, (v) => {
				const $scope2_id = _scope_id();
				let open = false;
				_html(`<button>${_text_resume($scope2_id, "#text/1", v, 1, $scope0_reason, 2)} ${_text_resume($scope2_id, "#text/2", open ? "close" : "open", 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", open, 1);
				_scope($scope2_id, { open }, "__tests__/template.marko", "2:4", { open: "3:10" });
			}, 1, "__tests__/template.marko_2*content");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_promise: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
