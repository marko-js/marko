// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let outer = ["a"];
	let inner = ["x"];
	_html("<main>");
	if ($scope0_reason) _for_of(outer, (o) => {
		const $scope1_id = _scope_id();
		if ($scope0_reason) _for_of(inner, (i) => {
			const $scope2_id = _scope_id();
			_html(`<div>${_text_resume($scope2_id, "#text/0", o)}${_text_resume($scope2_id, "#text/1", i, 2)}</div>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6");
		}, 0, $scope1_id, "#text/0", 1, 0, 0, 0, 1);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		outer,
		inner
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		inner: "2:6"
	});
}, 1, 0);
