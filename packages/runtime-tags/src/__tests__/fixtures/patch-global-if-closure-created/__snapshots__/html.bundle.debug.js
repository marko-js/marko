// tags/badge.marko
const $template$1 = "<button class=b>o</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/badge.marko_0"]];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko !__tests__/tags/badge.marko_0; b%;<button class=b>o</button><!><!>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	_html(`<button class=b>o</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", $global$1.brand, $scope0_page)}</p>`);
			_fill_global_subscribe("__tests__/tags/badge.marko_1_$global_brand#0:7", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/tags/badge.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/tags/badge.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/badge.marko_fill0", open, 1);
	_scope($scope0_id, { open }, "__tests__/tags/badge.marko", 0, { open: "1:6" });
});

// template.marko
const $template = "<button class=a>s</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=a>s</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=a>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_peek_scope_id($scope1_id, "#childScope/0", 0);
			badge_default({});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
