// tags/badge.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = " D l%c";
const $setup$1 = [[], ["__tests__/tags/badge.marko_0"]];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko !__tests__/tags/badge.marko_0; D l%;<p> </p><!><!>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<p>${_text_mark($scope0_id, "#text/1", count)}</p>${_el_mark($scope0_id, "#p/0")}`);
	_if(() => {
		if (count >= 0) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "#text/0", $global$1.brand, $scope0_page)}</i>`);
			_script($scope1_id, "__tests__/tags/badge.marko_1_$global#0:7", $scope0_page);
			_scope($scope1_id, {}, "__tests__/tags/badge.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/tags/badge.marko_1_$global_brand#0:8/subscribe", $scope0_id, 1);
	_script($scope0_id, "__tests__/tags/badge.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/badge.marko_0_count#3/fill", count, 1);
	_scope($scope0_id, { count }, "__tests__/tags/badge.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<div></div>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	badge_default({});
	_patch_child_end();
	_html(`<div></div>${_el_mark($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
