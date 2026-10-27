// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2; ;<button class=r>x</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchWrite:row", row, !_server_guard($scope0_reason, 0));
		_for_of([1, 2], (c) => {
			const $scope2_id = _scope_id();
			_html(`<button class=r>x</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_patch_write($scope2_id, "PatchWrite:c", c, 1);
			_scope($scope2_id, {
				c,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { c: "3:8" });
		}, 0, $scope1_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", 0, 0);
		_scope($scope1_id, {
			row,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { row: "2:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
