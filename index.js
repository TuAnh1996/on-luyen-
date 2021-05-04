$(document).ready(function () {
    // $(document) nó là cứa phấp của jquert cấu trúc của jque
    // cái này $(document) nó đảm bảo  giao diện sẽ chạy ra trc để dảm bảo  id đc đưua ra trc mới code do đó file js này có thể để đâu cũng đc cho vào head cũngđc 
    // ready là hàm trng tham số của nó cũng là hàm 
    // console.log("abccc")
    // id mk sd dấu # còn class mk sd .
    // cái .value tức là cái gtri mình truyền vào còn .innerHTML là cái giá trị có sẵn trong html 

    var content = $("#myId").html(); //  tương tự document.getElementById("myId").innerHTML;  
    //html vì nó sẽ lấy đc value  nd của id là myId nên t sẽ tạp 1 cái biến để hứng nó
    console.log(content)
    // cách dom tới class 
    var content2 =  $(".myClass").html();
    console.log(content2)
    // don tới input để lấy value của nó 
    var input = $("#txtInput").val();
    console.log(input)

    // cách don khi ấn vào click mình lấy đc value của input 
    $("#btnClick").click(function(){
        //console.log(123)// tức khi ta click vào btn thì nó log ra123
        var text = $("#txtInput").val() ;// vì cái này tạo ra biến nên ta cần 1 bieestn để hứng nó 
        console.log(text);
    })

    // ý tương đây là ta sẽ cho ẩn div rồi viết js làm nó hiện khi click vào show

    $("#btnShow").click(function(){
        // khi click vào btn nó sẽ dom tới the id divHello từ cái này ta cho nó css để hiện 
        // $("#divHello").css({display:"block"})
        // document.getElementById("divHello").style.display="block";
        $("#divHello").show();// ta dùng hàm show để hiện nó ra tương tự css ở trên 
    })
    // cách tạo hàm ẩn nó đi 
    $("#btnHide").click(function(){
        // $("#divHello").css({display:"none"})
        $("#divHello").hide();// ta dùng hàm show để hiện nó ra tương tự css ở trên 
    })
});