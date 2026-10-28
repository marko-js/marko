// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !__tests__/template.marko_3",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>",
	"__tests__/template.marko_7*shell": "__tests__/template.marko_7*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	const Wrap = { content: _content_resume("__tests__/template.marko_3*content", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
		_content_withhold(item), _patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill2", item);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_for_of(item, (it) => {
					const $scope5_id = _scope_id();
					_dynamic_tag($scope5_id, "#text/0", it, {}, 0, 0, 0, $wg__item);
					_write_if($scope3_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "4:13");
				}, 0, $scope4_id, "#text/0", $wg__item, $wg__item);
				_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope3_id, "#text/1");
		_script($scope3_id, "__tests__/template.marko_3");
		_patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill3", open, 1);
		_scope($scope3_id, {
			item,
			open
		}, "__tests__/template.marko", "1:2", {
			item: "1:16",
			open: "2:8"
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("__tests__/template.marko_6*content", ({ item }) => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason(), $wg__item2 = _write_guard($scope6_reason, 0);
		_for_of(item, (it) => {
			const $scope7_id = _scope_id();
			_dynamic_tag($scope7_id, "#text/0", it, {}, 10, 0, 0, $wg__item2);
			_write_if($scope6_reason, 0) && _scope($scope7_id, {}, "__tests__/template.marko", "7:4");
		}, 0, $scope6_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_7*shell");
		_scope($scope6_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? Wrap : Plain, { item: attrTags(attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.a, 1, $scope0_reason, 4)}</em>`);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope1_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_1_input_a#0:4/init" : "__tests__/template.marko_1_input_a#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_a: input.a }] : []) }), { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "#text/0", input.b, 1, $scope0_reason, 5)}</b>`);
		_unfilled_if($scope0_reason, 5) && _patch_init($scope2_id, _client_guard($scope0_reason, 5) ? "__tests__/template.marko_2_input_b#0:5/init" : "__tests__/template.marko_2_input_b#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:6"));
	}, $scope0_id, ($scope2) => $scope0_page ? [{ input_b: input.b }] : []) }) }, 17, 0, 0, $wg__input_on, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.a,
		input_b: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.b,
		Wrap: _unfilled_if($scope0_reason, 3) && Wrap,
		Plain: _unfilled_if($scope0_reason, 3) && Plain,
		"ClosureScopes:input_a/9": _write_if($scope0_reason, 4) && $input_a__closures,
		"ClosureScopes:input_b/10": _write_if($scope0_reason, 5) && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		Wrap: "1:9",
		Plain: "6:9"
	}) || (_filled_guard($scope0_reason, 4) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 5) && _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.b, !_server_guard($scope0_reason, 5)));
}, 1);
