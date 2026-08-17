// tags/child.marko
const $template$1 = "<section> </section>";
const $walks$1 = " D l";
const $input_workspace_id__script = _script("b0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("child mounted", $scope.f);
	},
	onDestroy: function() {
		console.log("child destroyed", $scope.f);
	}
}));
const $input_workspace_id = /*@__PURE__*/ _const(5, $input_workspace_id__script);
const $input_active = ($scope, input_active) => _attr_class($scope.a, input_active ? "on" : "off");
const $input_workspace_name = ($scope, input_workspace_name) => _text($scope.b, input_workspace_name);
const $input_workspace = ($scope, input_workspace) => {
	$input_workspace_id($scope, input_workspace?.id);
	$input_workspace_name($scope, input_workspace?.name);
};

// tags/shell.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$1);
const $input_status__script = _script("c0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("shell mounted", $scope.e);
	},
	onDestroy: function() {
		console.log("shell destroyed", $scope.e);
	}
}));
const $input_status = /*@__PURE__*/ _const(4, ($scope) => {
	_attr($scope.a, "data-status", $scope.e);
	$input_status__script($scope);
});
function $setup($scope) {
	$input_workspace($scope.b, {
		id: "a",
		name: "A"
	});
	$input_active($scope.b, true);
}

// template.marko
const $await_content__setup = ($scope) => {
	$setup($scope.a);
	$input_status($scope.a, "ready");
};
const $placeholder_content__setup = ($scope) => {
	$setup($scope.a);
	$input_status($scope.a, "loading");
};
const $placeholder_content = _content_resume("a0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter({ ok: true }, 3));
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, false);
}));
