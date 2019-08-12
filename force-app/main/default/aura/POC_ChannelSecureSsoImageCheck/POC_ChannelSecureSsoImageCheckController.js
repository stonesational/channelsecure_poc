/*
    Description:The following example dynamically loads a 1x1 pixel image hosted on DBS using javascript. 
                The resulting GET request will ensure SSO is in place
                A successful response is a good indication that DBS is running

    TODO:       Test against Channel Secure to ensure it can SSO

    */
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
        
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.pngasdF';

    }
})
