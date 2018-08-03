
function getImages(manifestUrl) {
  fetch(manifestUrl)
    .then(function (data) {
      return data.json(); })
    .then(function (json) {
      images = [];
      json.sequences[0].canvases.forEach((c, index) =>
        images.push({ 'name': index.toString(),
                      'img': c.images[0].resource.service['@id'] + '/full/110,/0/default.jpg' })
                    );
      document.getElementById("loader").style.visibility = "hidden";
                    })
                      .catch(function(err){
                        console.log('Error: ', err);
                      }
                      );
}

//https://download.mediasphere.museumfuernaturkunde.berlin/data/insekten_manifest.json
//https://download.mediasphere.museumfuernaturkunde.berlin/data/mollusken_manifest.json
//https://download.mediasphere.museumfuernaturkunde.berlin/data/ehrenberg_manifest.json
