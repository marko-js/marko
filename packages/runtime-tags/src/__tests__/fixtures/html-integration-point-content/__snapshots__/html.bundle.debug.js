// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let editing = false;
	let visible = true;
	_html("<svg><foreignObject class=host width=100 height=100>");
	_if(() => {
		if (editing) {
			const $scope1_id = _scope_id();
			_html("<input value=if>");
			_scope($scope1_id, {}, "__tests__/template.marko", "5:6");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/1", editing && "input", { value: "dynamic" });
	_html(`${_html_resume($scope0_id, "#text/2", editing ? "<input value=html>" : "", 2)}</foreignObject><foreignObject class=host>`);
	_show_start(visible, 1 && 1);
	_html("hidden: ");
	_if(() => {
		if (editing) {
			const $scope2_id = _scope_id();
			_html("<input value=hidden>");
			_scope($scope2_id, {}, "__tests__/template.marko", "10:28");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, 1, 1, 0, 1);
	_show_end($scope0_id, "#foreignobject/3", visible, 1, 1, "</foreignObject>");
	_html("<desc class=host>");
	_if(() => {
		if (editing) {
			const $scope3_id = _scope_id();
			_html("<a>desc</a>");
			_scope($scope3_id, {}, "__tests__/template.marko", "12:23");
			return 0;
		}
	}, $scope0_id, "#desc/5", 1, 1, 1, "</desc>", 1);
	_html("</svg><math><mtext class=host>");
	_if(() => {
		if (editing) {
			const $scope4_id = _scope_id();
			_html("<a>mtext</a>");
			_scope($scope4_id, {}, "__tests__/template.marko", "15:24");
			return 0;
		}
	}, $scope0_id, "#mtext/6", 1, 1, 1, "</mtext>", 1);
	_html(`</math><button class=edit>edit</button>${_el_resume($scope0_id, "#button/7")}<button class=show>show</button>${_el_resume($scope0_id, "#button/8")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		editing,
		visible
	}, "__tests__/template.marko", 0, {
		editing: "1:6",
		visible: "2:6"
	});
}, 1);
