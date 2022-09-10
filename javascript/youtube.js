// YouTube search
function ytSearch(search_txt){
    var ytsrclink = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDg6nMT7efJ5dTsjqLvFwYx5sJebBUAJyk&q=";
    var formated_txt = replace(search_txt, " ", "%20");
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var response = JSON.parse(xhr.responseText);
            printf(response);
            var video_id = response['items'][0]['id']['videoId'];
            var link = "https://www.youtube.com/watch?v="+video_id;
            printf(link);
        }
    });
    xhr.open('GET', ytsrclink+formated_txt+"%20official%20audio", true);
    xhr.send();
};