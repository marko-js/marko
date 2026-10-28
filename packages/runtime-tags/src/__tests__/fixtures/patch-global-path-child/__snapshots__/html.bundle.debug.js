// tags/path-child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/path-child.marko": "__tests__/tags/path-child.marko;D ;<p> </p>" });
var path_child_default = _template("__tests__/tags/path-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$2 = $global();
	_html(`<p>${_text_resume($scope0_id, "#text/0", $global$2.o.x, void 0, 4, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/path-child.marko_0_$global_o#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/path-child.marko", 0);
});

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>t</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", $global$1.k, $scope0_page)}</b>`);
			_patch_child($scope1_id, "#childScope/1", 0);
			path_child_default({});
			_patch_child_end();
			_fill_global_subscribe("__tests__/template.marko_1_$global_k#0:7", $scope1_id, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
