// tags/card/index.marko
const $template = "<section><h2> </h2><p> </p></section>";
const $walks = " E lD m";
_shells({ b: "b; E lD ;<section><h2> </h2><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section${_patch_attr_class($scope0_id, "aa class", input.klass, $scope0_reason, 0)}><h2>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_reason, 1)}</h2><p>${_patch_text($scope0_id, "c", input.note, void 0, $scope0_reason, 2)}</p></section>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let note = input.note;
	_html("<main>");
	_set_scope_reason(32);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		title: "fixed",
		klass: "c",
		note
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", note, 1);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
