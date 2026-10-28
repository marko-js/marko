// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $setup = [["__tests__/template.marko_0_#text#0/init"], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko __tests__/template.marko_0_#text#0/init!__tests__/template.marko_0;b%b D ;<!><!><button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_await($scope0_id, "#text/0", Promise.resolve(count + $global$1.suffix), (v) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", v)}</p>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, 1, 0);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_count#3_$global_suffix#7", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
