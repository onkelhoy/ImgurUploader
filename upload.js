function upload(callback){
    var img = $('#pages').get(0).files[0];
    var reader = new FileReader();

    reader.onload = function(e){
        uploadImage(e, callback);
    }
    reader.readAsDataURL(img);
}

function uploadImage(page, callback){
    var iurl = page.target.result.substr(page.target.result.indexOf(",") + 1, page.target.result.length);
    var clientId = '98fb764612f62b2';
    $.ajax({
        url: "https://api.imgur.com/3/upload",
        type: "POST",
        datatype: "json",
        data: {
            'image': iurl,
            'type': 'base64'
        },
        success: function(data){
            var link = data.data.link;
            callback(link);

        },//calling function which displays url
        error: function(){
            //error handleing
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Client-ID " + clientId);
        }
    });
}