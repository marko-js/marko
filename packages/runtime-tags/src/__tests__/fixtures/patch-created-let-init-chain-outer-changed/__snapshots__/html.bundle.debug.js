// template.marko
const $template = "<button class=x> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button class=x> </button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_x#0:6/setup!__tests__/template.marko_1; D lD ;<button class=s> </button><p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=x>${_text_mark($scope0_id, "#text/1", x)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let s = x;
			let b = s;
			_html(`<button class=s>${_text_mark($scope1_id, "#text/1", s)}</button>${_el_mark($scope1_id, "#button/0")}<p>${_text_mark($scope1_id, "#text/2", b)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				s,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { s: "4:8" });
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { x }, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
