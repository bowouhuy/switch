$('.asd').on('click', function () {
    var execa = document.getElementById('slider3');
        var execca=$('#slider3').attr('is-check')
        
        // execa.setAttribute("checked","");
        if(execca=="0"){
            execa.setAttribute("is-check","1");
            execa.setAttribute("checked","");
        }
        
        if(execca=="1") {
            execa.setAttribute("is-check","0");
            execa.removeAttribute("checked");
        }
        console.log(execca);
        console.log(execa);
});