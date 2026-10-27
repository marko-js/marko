// template.marko
const $template = "<button class=dec>-</button><button class=inc>+</button><ul></ul>";
const $walks = " b b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b b ;<button class=dec>-</button><button class=inc>+</button><ul></ul>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let n = 0;
	_html(`<button class=dec>-</button>${_el_resume($scope0_id, "#button/0")}<button class=inc>+</button>${_el_resume($scope0_id, "#button/1")}<ul>`);
	if ($scope0_page) _for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}:${_text_resume($scope1_id, "#text/1", $global$1.o.x, $scope0_page * 2)}</li>`);
		_fill_global_subscribe("__tests__/template.marko_1_$global_o#0:11", $scope0_id, 1);
		$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#ul/2", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
