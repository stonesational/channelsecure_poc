({
    image_load : function(component, event, helper) {

        var img = new Image();
        
        img.onload = function(){
            component.set("v.isInit", true);
        }
        
        img.onerror = function(){
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                mode: 'sticky',
                title: 'DBS Error',
                message: 'DBS is unavailable',
                type: 'error',
            });
            toastEvent.fire();
        }
        
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';
        
    }
})
