// tags/badge.marko
_shells({ b: "b;D ;<b class=badge> </b>" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}</b>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// tags/card.marko
const $template = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks = "E lD l D m";
_shells({ c: "c !c0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2><p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 1)}</p><button class=t>${_text_resume($scope0_id, "d", "show")}</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c0", open, 1);
	$scope0_reason && _scope($scope0_id, { i: open });
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D%b/${_w0}& l`)($walks), ((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_set_serialize_reason(30);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	card_default({
		...input.props,
		note: "off"
	});
	_html(`<button id=o>o</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		g: input.props,
		h: on,
		j: input.badge?.label,
		b: _existing_scope($childScope2)
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.props), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.badge?.label));
}, 1, () => [badge_default, card_default]);
