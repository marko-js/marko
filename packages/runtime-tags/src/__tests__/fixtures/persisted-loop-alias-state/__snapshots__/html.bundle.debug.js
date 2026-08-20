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
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/template.marko1", item?.id) : _patch_init($scope1_id, "__tests__/template.marko_1_input_items#4/init");
		const { name } = item;
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/template.marko0", name) : _patch_init($scope1_id, "__tests__/template.marko_1_input_items#4/init");
		const same = item;
		_html(`<p>${_escape(name + "/" + same.id + "#" + count)}${_el_resume($scope1_id, "#text/0")}</p>`);
		writeScope($scope1_id, {
			name,
			same_id: item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:4", {
			name: "4:14",
			same_id: ["same.id", "5:12"]
		});
	}, (item) => item.id, $scope0_id, "#text/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
