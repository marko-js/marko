// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const Wrap = { content: _content_resume("__tests__/template.marko_2*content", ({ item }) => {
		const $scope2_id = _scope_id();
		_content_withhold(item), _patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill1", item);
		const $scope2_reason = _scope_reason(), $wg__item = _write_guard($scope2_reason, 0);
		let open = true;
		_html(`<button class=toggle>t</button>${_el_resume($scope2_id, "#button/0")}`);
		if ($scope0_page) _if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", item, {}, 0, 0, $wg__item);
				_scope($scope3_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/1");
		_script($scope2_id, "__tests__/template.marko_2");
		_patch_value($scope2_id, "PatchValue:__tests__/template.marko_fill2", open, 1);
		_scope($scope2_id, {
			item,
			open
		}, "__tests__/template.marko", "1:2", {
			item: "1:16",
			open: "2:8"
		});
	}, $scope0_id) };
	const Plain = { content: _content_resume("__tests__/template.marko_4*content", ({ item }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__item2 = _write_guard($scope4_reason, 0);
		_dynamic_tag($scope4_id, "#text/0", item, {}, 0, 0, $wg__item2, void 0, 2);
		_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? Wrap : Plain, { item: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:6"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []) }) }, 0, 0, $wg__input_on, void 0, 1, $scope0_reason, 1);
	_html("</main>");
	_patch_write($scope0_id, "PatchWrite:Wrap", Wrap, 1);
	_patch_write($scope0_id, "PatchWrite:Plain", Plain, 1);
	$scope0_page ? _scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		Wrap: _unfilled_if($scope0_reason, 1) && Wrap,
		Plain: _unfilled_if($scope0_reason, 1) && Plain,
		"ClosureScopes:input_note/8": _write_if($scope0_reason, 2) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		Wrap: "1:9",
		Plain: "6:9"
	}) : _filled_guard($scope0_reason, 2) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
}, 1);
