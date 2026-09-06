// tags/card/index.marko
const $template = "<section><h2> </h2><p> </p></section>";
const $walks = " E lD m";
_shells({ b: "b; E lD ;<section><h2> </h2><p> </p></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section${_patch_attr_class($scope0_id, "a", input.klass, $scope0_owned, 0)}><h2>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_owned, 1)}</h2><p>${_patch_text($scope0_id, "c", input.note, void 0, $scope0_owned, 2)}</p></section>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let note = input.note;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(card_default)) {
		_set_serialize_reason(32);
		_patch_child($scope0_id, "a", $childScope);
		card_default({
			title: "fixed",
			klass: "c",
			note
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [card_default]);
