// tags/badge.marko
_shells({ b: "b;D ;<b class=badge> </b>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b class=badge>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/card.marko
const $template = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks = "E lD l D m";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0;E lD l D ;<div class=card><h2> </h2><p> </p><button class=t> </button></div>" });
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<div class=card><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2><p>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</p><button class=t>${_text_resume($scope0_id, "d", "show")}</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", open, 1);
	$scope0_page && _scope($scope0_id, { i: open });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D%b/${_w0}& l`)($walks)};${((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_set_scope_reason(30);
	const $childScope2 = _patch_child($scope0_id, "b");
	card_default({
		...input.props,
		note: "off"
	});
	_html(`<button id=o>o</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		g: input.props,
		h: on,
		j: input.badge?.label,
		b: _existing_scope($childScope2)
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.props, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.badge?.label, !_server_guard($scope0_reason, 1)));
}, 1);
