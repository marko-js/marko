// template.marko
const $Card_content__walks = " b";
const $Card_content__template = "<a>x</a>";
const $template = $Card_content__template;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Card_content__walks);
const $setup = [[], []];
_shells({ "__tests__/template.marko": `__tests__/template.marko;${((_w0) => `/${_w0}&`)($Card_content__walks)};${$Card_content__template}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_q__OR__input_item = _unfilled_if($scope0_reason, 0), $ui__input_item = _unfilled_if($scope0_reason, 2), $ui__input_q = _unfilled_if($scope0_reason, 1), $fg__input_q = _filled_guard($scope0_reason, 1), $fg__input_item = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_1*content", ({ href }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<a${_attr("href", href, $scope1_id, "#a/0", $scope1_reason, 0)}>x</a>${_el_mark($scope1_id, "#a/0", _updates_from($scope1_reason, 0))}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Card.content({ href: input.q + input.item });
	_patch_child_end();
	_patch_render($scope0_id, "__tests__/template.marko_0_input_q#3_input_item#4/setup", (($fg__input_q ? " input_q" : "") + ($fg__input_item ? " input_item" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_q: ($ui__input_item || $ui__input_q__OR__input_item) && input.q,
		input_item: ($ui__input_q || $ui__input_q__OR__input_item) && input.item,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_q: ["input.q"],
		input_item: ["input.item"]
	}) || ($fg__input_q && $ui__input_item && _patch_write($scope0_id, "PatchMarkedWrite:input_q", input.q, !_server_guard($scope0_reason, 1)), $fg__input_item && $ui__input_q && _patch_write($scope0_id, "PatchMarkedWrite:input_item", input.item, !_server_guard($scope0_reason, 2)));
}, 1);
