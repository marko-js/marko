// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_count#5/init;D ;<p> </p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/template.marko0", id) : _patch_init($scope1_id, "__tests__/template.marko_1_input_items#4/init");
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/template.marko1", rest) : _patch_init($scope1_id, "__tests__/template.marko_1_input_items#4/init");
		_html(`<p>${_escape(id + ":" + Object.keys(rest).join("+") + "#" + count)}${_el_resume($scope1_id, "#text/0")}</p>`);
		writeScope($scope1_id, {
			id,
			rest,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:4", {
			id: "3:10",
			rest: "3:17"
		});
	}, (item) => item.id, $scope0_id, "#text/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
