 window.onload = function() {

    var imageSrc = document
                    .getElementById('wrapper')
                     .style
                      .backgroundImage;

    // I just broke it up on newlines for readability        

    var image = new Image();
    image.src = imageSrc;

    var width = image.width,
        height = image.height;

    alert('width =' + width + ', height = ' + height)    

}