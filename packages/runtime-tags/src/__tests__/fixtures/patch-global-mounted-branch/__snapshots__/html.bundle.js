// tags/badge.marko
const $template = "<p> </p><!><!>";
const $walks = " D l%c";
const $setup$1 = [[], ["b2"]];
_shells({ b: "b !b2; D l%;<p> </p><!><!>" });
var badge_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<p>${_text_mark($scope0_id, "b", count)}</p>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "a", $global$1.brand, $scope0_page)}</i>`);
			_script($scope1_id, "b0", $scope0_page);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_fill_global_subscribe("b1", $scope0_id, 1);
	_script($scope0_id, "b2");
	_patch_fill($scope0_id, "vb3", count, 1);
	_scope($scope0_id, { d: count });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<div></div>`)($template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	badge_default({});
	_patch_child_end();
	_html(`<div></div>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
