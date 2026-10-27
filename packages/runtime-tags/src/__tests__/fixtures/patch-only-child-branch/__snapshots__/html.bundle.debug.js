// template.marko
const $template = "<main><div></div><button>c <!></button></main>";
const $walks = "D b Db%m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b Db%;<main><div></div><button>c <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;Db%;<span>hi <!></span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>hi ${_patch_text($scope1_id, "#text/0", input.msg, 2, $scope0_reason, 1)}</span>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_msg#0:6/init");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_show)}<button>c ${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_msg: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.msg,
		count
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
