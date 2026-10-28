// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2_#text#1/await": "__tests__/template.marko_2_#text#1/await;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D l%;<p> </p><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D l%;<p> </p><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/init;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				let q = Promise.resolve("k");
				_html(`<p>${_text_resume($scope2_id, "#text/0", x)}</p>`);
				_await($scope2_id, "#text/1", q, (y) => {
					const $scope3_id = _scope_id();
					_html(`<b>${_text_resume($scope3_id, "#text/0", y, 1, 0, 0)}</b>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "7:6");
				}, 1, "__tests__/template.marko_3*content");
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			}, 1, "__tests__/template.marko_2*content", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
