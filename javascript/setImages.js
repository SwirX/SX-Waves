// A global variable should be defined to hold the URL for the file to be downloaded
// This is good practice as if many links are being generated or the link is being regularly updated, you don't want to be creating new variables every time, wasting memory
var textFileUrl = null;

// Function for generating a text file URL containing given text
function generateTextFileUrl(txt) {
    let fileData = new Blob([txt], {type: 'text/plain'});

    // If a file has been previously generated, revoke the existing URL
    if (textFileUrl !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFileUrl = window.URL.createObjectURL(fileData);

    // Returns a reference to the global variable holding the URL
    // Again, this is better than generating and returning the URL itself from the function as it will eat memory if the file contents are large or regularly changing
    return textFileUrl;
};

function lta(){
    for (var artist in songInfo["artists"]){
        printf(artist)
        getInfo(artist);
    };
}