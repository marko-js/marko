// template.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>add</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = input.items;
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		const headingId = _id("headingId");
		_html(`<h2${_attr("id", headingId)}>${_escape(item.key)}</h2><input${_attr("aria-describedby", headingId)}${_attr("title", input.prefix + " " + headingId)}>${_el_resume($scope1_id, "#input/2", $wg__input_prefix)}`);
		_scope($scope1_id, { headingId: _write_if($scope0_reason, 1) && headingId }, "__tests__/template.marko", "3:2", { headingId: "4:7" });
	}, "key", $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_prefix: input.prefix,
		items
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		items: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.prefix, !_server_guard($scope0_reason, 1));
}, 1);
