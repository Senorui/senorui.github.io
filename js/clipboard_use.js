/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
/* code */
var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '<i class="fa fa-copy"></i><span>复制</span>';
    copyHtml += '</button>';
    $(".highlight .code").before(copyHtml);
    new Clipboard('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
}
initCopyCode();
}(window, document);
