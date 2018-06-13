$(document).ready(function () {
    // get all highlight comments  id 
    var highlights = $('span').map(function () {
        return this.id;
    }).get();

    console.log(highlights);

    // get all heights of highlight comments id 
    heights = [];

    for (let i = 0; i < highlights.length; i++) {
        const highlight = highlights[i];
        const height = $("#" + highlight).offset().top;
        // heights.push(height);
        $("#panel-" + highlight).css({
            "top": height + "px"
        })
    }

    console.log(heights);


    get id from all comments panel
    var comments = $(".panel-group").map(function () {
        return this.id;
    }).get();

    console.log(comments);

    // make object { comments id : heights }
    var commentsHeights = {};
    comments.map((e, i) => commentsHeights[e] = heights[i]);

    console.log(commentsHeights);

    for (var key in commentsHeights) {
        if (commentsHeights.hasOwnProperty(key)) {
            $("#" + key).css({
                "top": commentsHeights[key] + "px"
            })
        }
    }
});




<script>
$(document).ready(function () {

    // comment template
    // var panel = "";
    // for (var i = 0; i < judul_komentar.length; i++) {
    //     console.log(judul_komentar[i]);
    //     panel +=
    //         "<div id='panel-komentar-" + i + "' class='panel-group'>" +
    //         "<div class='panel panel-default'>" +
    //         "<div class='panel-heading'>" +
    //         "<h4 class='panel-title'>" +
    //         "<a data-toggle='collapse' href='#collapse" + i + "'>" + judul_komentar[i] + "</a>" +
    //         "</h4>" +
    //         "</div>" +
    //         "<div id='collapse" + i + "' class='panel-collapse collapse'>" +
    //         "<div class='panel-body'>" +
    //         "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate pariatur delectus dolorem maxime nihil aperiam ullam voluptates ipsa ea, blanditiis enim doloribus praesentium porro magni aspernatur magnam labore nam?</p>" +
    //         "</div>" +
    //         "</div>" +
    //         "</div>" +
    //         "</div>"
    // }

    // assign to #bagian-komentar 
    // $("#bagian-komentar").html(panel);

    // get all highlight comments  id 
    // var highlights = $('span').map(function () {
    //     return this.id;
    // }).get();

    // // get all heights of highlight comments id and assign to its css
    // for (let i = 0; i < highlights.length; i++) {
    //     const highlight = highlights[i];
    //     const height = $('#' + highlight).offset().top;
    //     $('#panel-' + highlight).css({
    //         "top": height + "px"
    //     });
    // };

    // make higlight and add id komentar increment

    $("#tambah-komentar").on('click', function (event) {
        $("#myModal").modal("hide");
        // tambahKomentarPanel();
    });

    var i = 1;
    $(".peraturan").on('click', function (event) {
        $(event.target).prepend('<span id="komentar-' + i + '"></span>');
        $(event.target).addClass('highlight-' + i);

        $("#myModal").modal("show");

        $("#tutup-komentar").click(function () {
            $("#myModal").modal("hide");
            $("*").removeClass('highlight-' + (i - 1));
        });

        i++;
    });
    
    console.log(i);

    // var height = $("#komentar-" + i).offset().top;

    // $('#panel-komentar-' + i).css({
    //     "top": height + "px"
    // });


    // function tambahKomentarPanel() {
    //     $("#bagian-komentar").append(
    //         "<div id='panel-komentar-" + (i - 1) + "' class='panel-group'>" +
    //         "<div class='panel panel-default'>" +
    //         "<div class='panel-heading'>" +
    //         "<h4 class='panel-title'>" +
    //         "<a data-toggle='collapse' href='#collapse" + (i - 1) + "'>" + "tes" + "</a>" +
    //         "</h4>" +
    //         "</div>" +
    //         "<div id='collapse" + (i - 1) + "' class='panel-collapse collapse'>" +
    //         "<div class='panel-body'>" +
    //         "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate pariatur delectus dolorem maxime nihil aperiam ullam voluptates ipsa ea, blanditiis enim doloribus praesentium porro magni aspernatur magnam labore nam?</p>" +
    //         "</div>" +
    //         "</div>" +
    //         "</div>" +
    //         "</div>"
    //     );
    // }


});
</script>