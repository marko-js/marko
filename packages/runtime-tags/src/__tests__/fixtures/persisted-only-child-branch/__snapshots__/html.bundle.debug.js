// template.marko
const $template = "<main><div></div><button>c <!></button></main>";
const $walks = "D b Db%m";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b Db%;<main><div></div><button>c <!></button></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;Db%;<span>hi <!></span>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>hi ${_patch_text($scope1_id, "#text/0", input.msg, 2, $scope0_owned, 2)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $sg__input_show)}<button>c ${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		input_msg: input.msg,
		count
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
