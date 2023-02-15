function searchWords() {
    let searchList = $("#text").val(); //入力値
    let targetList; //keywordのtextを格納する
    
    if (searchList != "") {
        $(".keyword").each(function() {
            targetList = $(this).text();
            if (targetList.indexOf(searchList) == -1) {
                $(this).parent().addClass("display-none");
            } else {
                $(this).parent().removeClass("display-none");
            }
        });
    } else {
        $("li").removeClass("display-none");
    }
}

$("#text").on("input", searchWords);
