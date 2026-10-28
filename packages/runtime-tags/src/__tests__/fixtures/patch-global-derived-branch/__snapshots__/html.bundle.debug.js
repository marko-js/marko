// collect.ts
function collect(global, item) {
	(global.seen ??= []).push(item);
	return item;
}
function collected(global) {
	const seen = global.seen;
	return seen?.length ? seen.splice(0).join("+") : "";
}

// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<p> </p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<style></style>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", collect($global$1, item), 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
		_fill_global_subscribe("__tests__/template.marko_1_$global#0:7_item#2", $scope0_id);
		_scope($scope1_id, { item: _unfilled_if($scope0_reason, 0) && item }, "__tests__/template.marko", "3:4", { item: "3:8" });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	const summary = collected($global$1);
	_if(() => {
		if (summary) {
			const $scope2_id = _scope_id();
			_html(`<style${_attr_nonce()}>${_escape_style(summary, $scope2_id, "PatchTextContent:#style/0", 4, 0)}</style>${_el_resume($scope2_id, "#style/0")}`);
			_scope($scope2_id, {}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $scope0_page, 1, 0, 0, ["__tests__/template.marko_2*shell"]);
	_html("</main>");
	_fill_global_subscribe("__tests__/template.marko_0_$global#7", $scope0_id);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
