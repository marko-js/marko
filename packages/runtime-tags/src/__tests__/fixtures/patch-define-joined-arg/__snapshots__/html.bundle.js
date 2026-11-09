// template.marko
const $Card_content__walks = " b";
const $Card_content__template = "<a>x</a>";
_shells({ a: `a;${((_w0) => `/${_w0}&`)($Card_content__walks)};${$Card_content__template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_q__OR__input_item = _unfilled_if($scope0_reason, 0), $ui__input_item = _unfilled_if($scope0_reason, 2), $ui__input_q = _unfilled_if($scope0_reason, 1), $fg__input_q = _filled_guard($scope0_reason, 1), $fg__input_item = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", ({ href }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<a${_attr("href", href, $scope1_id, "a", $scope1_reason, 0)}>x</a>${_el_mark($scope1_id, "a", _updates_from($scope1_reason, 0))}`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Card.content({ href: input.q + input.item });
	_patch_child_end();
	_patch_render($scope0_id, "a1", [$fg__input_q && "d", $fg__input_item && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_item || $ui__input_q__OR__input_item) && input.q,
		e: ($ui__input_q || $ui__input_q__OR__input_item) && input.item,
		a: _existing_scope($childScope)
	}) || ($fg__input_q && $ui__input_item && _patch_write($scope0_id, "xd", input.q, !_server_guard($scope0_reason, 1)), $fg__input_item && $ui__input_q && _patch_write($scope0_id, "xe", input.item, !_server_guard($scope0_reason, 2)));
}, 1);
