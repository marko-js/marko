// template.marko
function watch(signal, name, value) {
	console.log("read", name, value, signal.aborted);
	signal.onabort = () => console.log("abort", name, value);
	return value;
}
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			const big = count > 1;
			_html("<div");
			_attrs_content({
				"data-spread": watch(_signal_read_error(), "spread", count),
				...input.attrs
			}, "#div/0", $scope1_id, "div");
			_html(`</div>${_el_mark($scope1_id, "#div/0")}<div${_attr("data-first", watch(_signal_read_error(), "first", count))}${_attr("data-second", watch(_signal_read_error(), "second", count))}></div>${_el_mark($scope1_id, "#div/1")}<div${_attr("data-big", watch(_signal_read_error(), "big", big))}></div>${_el_mark($scope1_id, "#div/2")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:6_count#0:7");
			_scope($scope1_id, {}, "__tests__/template.marko", "8:2", { "EventAttributes:#div/0": ["...{ \"data-spread\": watch($signal, \"spread\", count), ...input.attrs }", "10:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button id=inc>${_text_mark($scope0_id, "#text/2", count)}</button>${_el_mark($scope0_id, "#button/1")}<button id=hide></button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_attrs: input.attrs,
		count
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		count: "7:6"
	});
}, 1);
