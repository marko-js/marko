// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_show#0:6/init;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let show = input.show;
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			const Body = { content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.w, 1, $scope0_reason, 2)}</p>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_2_input_w#0:5/init" : "__tests__/template.marko_2_input_w#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:14"), "__tests__/template.marko_2_input_w#0:5/subscribe");
			}, $scope1_id, 1) };
			_if(() => {
				if (show) {
					const $scope3_id = _scope_id();
					_patch_child(0, "#childScope/0");
					Body.content({});
					_patch_child_end();
					_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:53");
					return 0;
				}
			}, $scope1_id, "#text/0");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_v, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_w: input.w,
		show: _write_if($scope0_reason, 1) && show,
		"ClosureScopes:input_w/7": _write_if($scope0_reason, 2) && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		show: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 2));
	$wg__input_v || _resume_branch($scope0_id);
}, 1);
