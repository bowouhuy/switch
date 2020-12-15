
var z=[0,0,0]
var b=3;
function cek(a,x){
    
    if (z[0] !=x){
        z[2]=z[1];
        z[1]=z[0];
        z[0]=x
    }
    
    var slide = document.getElementById(a);

    var status = $('#'+a+'').attr('is-check');

    // console.log(z);

    if(status =="0"){
        slide.setAttribute("is-check","1")
        slide.setAttribute("checked","");
    }
    else{
        slide.setAttribute("is-check","0")
        slide.removeAttribute("checked");

    }
    var total = z[0]+z[1]+z[2];
    console.log(total);
    if (total == 6){
        var exec = document.getElementById('slider3');
        var execc=$('#slider3').attr('is-check');
        // console.log(exec);
        // disb();
        if(execc == "1"){
            z[2]=0
            exec.setAttribute("is-check","0");
            exec.removeAttribute("checked");
            // console.log(exec);
            // console.log(execc);
            // console.log(z);
    }
        }
}

    

function disable(){
    // z[2]=z[1];
    // z[1]=z[0];
    // z[0]=x

    
}


$('#slider1').on('click', function (){
    $("#slider1").click(cek("slider1",1));
});
$('#slider2').on('click', function (){
    $("#slider2").click(cek("slider2",5));
});
$('#slider3').on('click', function (){
    $("#slider3").click(cek("slider3",3));
});


//TESTTTT
// $('#slider1').on('click', function (){
//     $("#slider1").click(disb());
// });


function disb() {
    var execa = document.getElementById('slider3');
        var execca=$('#slider3').attr('is-check')
        console.log(execca);
        
        if(execca=="0"){
            execa.setAttribute("is-check","1");
            execa.setAttribute("checked","");
        }
        
        else if(execca=="1") {
            execa.setAttribute("is-check","0");
            execa.removeAttribute("checked");
            console.log(execa);
            console.log(execca);
        }
};