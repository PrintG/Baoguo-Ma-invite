/*==============================*/
//     * author -> Print        //
//     * QQ -> 2662256509       //
/*=============================*/
(function(win, doc){

	//移动端适配
	(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var offsetWidth = docEl.offsetWidth;
                if (!offsetWidth) return;
                if(offsetWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (offsetWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);

        recalc();
    })(doc, win);

})(window, document);