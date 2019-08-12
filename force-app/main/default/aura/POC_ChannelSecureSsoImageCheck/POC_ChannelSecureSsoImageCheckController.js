({
    image_load : function(component, event, helper) {
        var img = new Image();
        img.onload = function(){
            alert('Image loaded successfully');
        }
        img.onerror = function(){
            alert('Failure to load image');
        }
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';
    }
})
