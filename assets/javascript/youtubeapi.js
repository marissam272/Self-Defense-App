$("#tkvidBtn").on("click", function(event) {
    event.preventDefault();

    $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: "UCfP5KiBqbpFaKnddFa-KHaw",
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    var items = data.items
                    var playList = items[2].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#vid").append(output)
                });

    function add(playList)
    {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#vid").append(html);
        return output;
    }
});