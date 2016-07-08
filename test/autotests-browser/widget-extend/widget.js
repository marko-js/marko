exports.extend = function(widget) {
    var $el = widget.$();
    var checked = $el.hasClass('checked');

    function isChecked() {
        return checked;
    }

    function setChecked(newChecked) {
        if (checked === newChecked) {
            return;
        }

        checked = newChecked;

        if (checked) {
            $el.addClass('checked');
        } else {
            $el.removeClass('checked');
        }

        widget.emit('toggle', {
            checked: checked,
            data: widget.data
        });
    }

    widget.on('click', function() {
        setChecked(!checked);
    });

    widget.isChecked = isChecked;
    widget.setChecked = setChecked;

    widget.on('afterInit', function(eventArgs) {
        var widgetConfig = eventArgs.config;
        widget.data = widgetConfig.data;
    });
};