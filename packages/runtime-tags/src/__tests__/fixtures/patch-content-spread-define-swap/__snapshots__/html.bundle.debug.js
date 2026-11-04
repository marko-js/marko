// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<strong>two <!></strong>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;Db%;<em>one <!></em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<div></div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $wi__input_title__OR__input_which = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "#text/0", input.title, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_title#0:3/subscribe", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: $wi__input_title__OR__input_which && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "#text/0", input.title, 2, $scope0_reason, 1)}</strong>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_title#0:3/subscribe", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
			_: $wi__input_title__OR__input_which && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title/8": $wi__input_title && 1
		}, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_html("<div>");
	_attr_content("#div/0", $scope0_id, input.which ? one : two, 0, 1, $scope0_reason, 2);
	_html(`</div>${_el_mark($scope0_id, "#div/0", _updates_from($scope0_reason, 2))}`);
	$fg__input_title && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#3/subscribers", "input_title");
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.title,
		one: _unfilled_if($scope0_reason, 2) && one,
		two: _unfilled_if($scope0_reason, 2) && two,
		"ClosureScopes:input_title/8": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		one: "1:9",
		two: "2:9"
	}) || $fg__input_title && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 1));
}, 1);
