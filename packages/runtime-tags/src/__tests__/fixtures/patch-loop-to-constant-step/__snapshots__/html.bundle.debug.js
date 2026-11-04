// template.marko
const $template = "<p>picked <!></p><div class=from></div><div class=step></div>";
const $walks = "Db%l b b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;Db%l b ;<p>picked <!></p><div class=from></div><div class=step></div>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; D ;<button> </button>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2; D ;<button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let picked = -1;
	_html(`<p>picked ${_text_mark($scope0_id, "#text/0", picked, 2)}</p><div class=from>`);
	_for_to(input.n, 1, 2, (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_text_mark($scope1_id, "#text/1", i, 1, $scope0_reason, 0)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			"#LoopKey": i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:4", { "#LoopKey": "4:8" });
	}, 0, $scope0_id, "#div/1", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "#div/1")}<div class=step>`);
	_for_until(input.n, 0, 3, (i) => {
		const $scope2_id = _scope_id();
		_html(`<button>${_text_mark($scope2_id, "#text/1", i, 1, $scope0_reason, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			"#LoopKey": i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "9:4", { "#LoopKey": "9:8" });
	}, 0, $scope0_id, "#div/2", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "#div/2")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
