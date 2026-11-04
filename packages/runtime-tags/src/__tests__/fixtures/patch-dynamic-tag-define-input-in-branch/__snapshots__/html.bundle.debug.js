// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<h5> </h5>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<h4> </h4>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 2), $cg__input_show__OR__input_useA__OR__input_record = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_useA__OR__input_record = _unfilled_if($scope0_reason, 2), $ui__input_show__OR__input_useA__OR__input_record = _unfilled_if($scope0_reason, 3), $ui__input_show__OR__input_record = _unfilled_if($scope0_reason, 1), $ui__input_show__OR__input_useA = _unfilled_if($scope0_reason, 0), $fg__input_useA = _filled_guard($scope0_reason, 5), $fg__input_record = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_2*content", ({ record }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<h4>${_text_mark($scope2_id, "#text/0", record.name, 1, 4, 0)}</h4>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ record }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<h5>${_text_mark($scope3_id, "#text/0", record.name, 1, 4, 0)}</h5>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.useA ? Card : Other, { record: input.record }, 1, 0, 0, $wg__input_useA__OR__input_record, $scope0_reason, 2);
			!$cg__input_show__OR__input_useA__OR__input_record && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Card", Card);
			!$cg__input_show__OR__input_useA__OR__input_record && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Other", Other);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_useA#0:4_input_record#0:5_Card#0:6_Other#0:7/setup", ((_filled_guard($scope0_reason, 5) ? " >input_useA" : "") + (_filled_guard($scope0_reason, 6) ? " >input_record" : "")).slice(1), $scope0_reason, 2);
			_write_if($scope0_reason, 3) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	$fg__input_useA && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_useA#0:4/setup", "input_useA");
	$fg__input_record && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_record#0:5/setup", "input_record");
	_scope($scope0_id, {
		input_useA: _write_if($scope0_reason, 1) && ($ui__input_show__OR__input_record || $ui__input_useA__OR__input_record) && input.useA,
		input_record: _write_if($scope0_reason, 0) && ($ui__input_show__OR__input_useA || $ui__input_useA__OR__input_record) && input.record,
		Card: ($ui__input_show__OR__input_useA__OR__input_record || $ui__input_useA__OR__input_record) && Card,
		Other: ($ui__input_show__OR__input_useA__OR__input_record || $ui__input_useA__OR__input_record) && Other
	}, "__tests__/template.marko", 0, {
		input_useA: ["input.useA"],
		input_record: ["input.record"],
		Card: "1:9",
		Other: "4:9"
	}) || ($fg__input_useA && $ui__input_show__OR__input_record && _patch_write($scope0_id, "PatchMarkedWrite:input_useA", input.useA, !_server_guard($scope0_reason, 5)), $fg__input_record && $ui__input_show__OR__input_useA && _patch_write($scope0_id, "PatchMarkedWrite:input_record", input.record, !_server_guard($scope0_reason, 6)));
}, 1);
