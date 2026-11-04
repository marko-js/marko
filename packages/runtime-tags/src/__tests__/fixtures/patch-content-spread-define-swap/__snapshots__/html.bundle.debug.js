// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = [[], ["__tests__/template.marko_0_attrs#8"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_attrs#8; ;<div></div>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $ui__input_which = _unfilled_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "#text/0", input.title, 2, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_title#0:3/subscribe", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_title && "__tests__/template.marko_1_input_title#0:3/subscribe");
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "#text/0", input.title, 2, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_title#0:3/subscribe", $cg__input_title);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title/9": $wi__input_title && 1
		}, "__tests__/template.marko", "2:2"), $cg__input_title && "__tests__/template.marko_2_input_title#0:3/subscribe");
	}, $scope0_id) };
	const attrs = { content: input.which ? one : two };
	_html("<div");
	_attrs_content(attrs, "#div/0", $scope0_id, "div", 0, 1, 0, $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs#8");
	_scope($scope0_id, {
		input_title: input.title,
		one: $ui__input_which && one,
		two: $ui__input_which && two,
		"ClosureScopes:input_title/9": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		one: "1:9",
		two: "2:9",
		"EventAttributes:#div/0": ["...attrs", "4:9"]
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#3/subscribers", "input_title");
}, 1);
