// helper.ts
let thing = false;

// tags/struct/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/struct/index.marko": "__tests__/tags/struct/index.marko;b%;<!><!><!>",
	"__tests__/tags/struct/index.marko_1*shell": "__tests__/tags/struct/index.marko_1*shell,<div>a</div>",
	"__tests__/tags/struct/index.marko_2*shell": "__tests__/tags/struct/index.marko_2*shell,<span>b</span>"
});
var struct_default = _template("__tests__/tags/struct/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_mode = _write_if($scope0_reason, 0), $wg__input_mode = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.mode) {
			const $scope1_id = _scope_id();
			_html("<div>a</div>");
			$wi__input_mode && _scope($scope1_id, {}, "__tests__/tags/struct/index.marko", "1:2");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<span>b</span>");
			$wi__input_mode && _scope($scope2_id, {}, "__tests__/tags/struct/index.marko", "4:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_mode, void 0, void 0, void 0, ["__tests__/tags/struct/index.marko_1*shell", "__tests__/tags/struct/index.marko_2*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/struct/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_peek_scope_id($scope1_id, "#childScope/0", 0);
			struct_default({ mode: false });
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "2:6" });
}, 1);
