// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<span> </span>";
const $template = "<!><!><!>";
const $walks = "b%c";
const WORD = "w";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_input_a#0:4_x#4/init!__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&D l D l`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p><button> </button>`)($Body_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const Body = { content: _content("__tests__/template.marko_2*content", ({ v, w }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<span>${_text_resume($scope2_id, "#text/0", v + w, 1, $scope2_reason, 0)}</span>`);
				_client_guard($scope2_reason, 2) && _patch_write($scope2_id, "PatchWrite:v", v, 1);
				_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_v#3_w#4/init");
				_scope($scope2_id, {
					v: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && v,
					w: _unfilled_if($scope2_reason, 1) && w
				}, "__tests__/template.marko", "5:4", {
					v: "5:18",
					w: "5:21"
				}) || _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill3", w, !_server_guard($scope2_reason, 2));
			}, $scope1_id, 1) };
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Body.content({
				v: y,
				w: WORD
			});
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "#text/1", input.a, 1, $scope0_reason, 1)}</p><button>${_text_resume($scope1_id, "#text/3", x + input.a)}</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:4/init");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", y, 1);
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 1) && x,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2", { x: "3:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
}, 1);
