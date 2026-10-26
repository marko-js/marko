// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:5/init __tests__/template.marko_1_count#0:5_n#2/init;D%c%;<p><!>:<!></p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_patch_text($scope1_id, "#text/0", n, void 0, 0, 0)}:${_text_resume($scope1_id, "#text/1", count, 2)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1_count#0:5_n#2");
			_patch_write($scope1_id, "PatchWrite:n", n, 1);
			$scope0_page && _scope($scope1_id, {
				n,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:2", { n: "3:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
