// tags/duo/index.marko
const $template = "<h2> </h2><p> </p>";
const $walks = "D lD l";
const $setup$1 = [[], []];
_shells({ b: "b;D lD ;<h2> </h2><p> </p>" });
var duo_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<h2>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 1)}</h2><p>${_patch_text($scope0_id, "b", JSON.stringify(input), void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(30);
	const $childScope = _patch_child($scope0_id, "a");
	duo_default({
		label: input.title,
		value: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: count,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.title, !_server_guard($scope0_reason, 0));
}, 1);
