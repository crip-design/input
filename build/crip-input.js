(function (d, $) {
    'use strict';

    $.fn.cripInput = function (options) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            labelVisible: true
        }, options);

        return this.each(function () {
            var element = $(this),
                formControl = element.find('.form-control'),
                controlLabel = element.find('.control-label');

            formControl
                .on('focus', focusElement)
                .on('blur', blurElement);

            hasVal();

            function focusElement() {
                element.addClass('focused');
                controlLabel.removeClass('hidden');
            }

            function blurElement() {
                element.removeClass('focused');
                if (!hasVal() && settings.labelVisible)
                    element.removeClass('has-content');
            }

            function hasVal() {
                var hasValue = formControl.val() != "";
                if (hasValue) {
                    controlLabel.addClass('hidden');

                    if (settings.labelVisible)
                        element.addClass('has-content');
                }
                return hasValue;
            }
        });
    };
})(document, jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNyaXAtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGQsICQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAkLmZuLmNyaXBJbnB1dCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGVhc2llc3Qgd2F5IHRvIGhhdmUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICBsYWJlbFZpc2libGU6IHRydWVcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2wgPSBlbGVtZW50LmZpbmQoJy5mb3JtLWNvbnRyb2wnKSxcbiAgICAgICAgICAgICAgICBjb250cm9sTGFiZWwgPSBlbGVtZW50LmZpbmQoJy5jb250cm9sLWxhYmVsJyk7XG5cbiAgICAgICAgICAgIGZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1cycsIGZvY3VzRWxlbWVudClcbiAgICAgICAgICAgICAgICAub24oJ2JsdXInLCBibHVyRWxlbWVudCk7XG5cbiAgICAgICAgICAgIGhhc1ZhbCgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnZm9jdXNlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xMYWJlbC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGJsdXJFbGVtZW50KCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2ZvY3VzZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1ZhbCgpICYmIHNldHRpbmdzLmxhYmVsVmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnaGFzLWNvbnRlbnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFzVmFsKCkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNWYWx1ZSA9IGZvcm1Db250cm9sLnZhbCgpICE9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xMYWJlbC5hZGRDbGFzcygnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmxhYmVsVmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2hhcy1jb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKGRvY3VtZW50LCBqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
