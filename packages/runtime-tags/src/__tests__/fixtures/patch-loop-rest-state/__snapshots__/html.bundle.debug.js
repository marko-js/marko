// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:5/setup;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:rest", rest, !_server_guard($scope0_reason, 0));
		_html(`<p>${_text_mark($scope1_id, "#text/0", id + ":" + Object.keys(rest).join("+") + "#" + count)}</p>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_count#0:5_rest#4/setup", _filled_guard($scope0_reason, 0) && "rest");
		_scope($scope1_id, {
			"#LoopKey": id,
			rest,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:4", {
			"#LoopKey": "3:10",
			rest: "3:17"
		});
	}, (item) => item.id, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
