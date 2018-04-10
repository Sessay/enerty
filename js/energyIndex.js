$(function(){
    $(".energyindex-containt").load("energycontant.html");
    $(".energyindex-footer").load("energyfooter.html");

    $(window).load(function() {
        // console.log($(".energyindex-containt").height());
        var fheight = $(".energy-footer").height();
        var theight = $(".energyindex-header").height();
        var cheight = $(window).height() - theight -  fheight;
        $(".energy-contant").height(cheight);
        console.log(cheight);

    });
    // var cheight = $(document).height() - $(".energyindex-header").height() -  155;
    // $(".energyindex-containt").height(cheight);
    // alert($(".energyindex-containt").height());
});