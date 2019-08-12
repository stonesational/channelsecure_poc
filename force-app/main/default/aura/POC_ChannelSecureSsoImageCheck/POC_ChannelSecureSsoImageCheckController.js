/*
    Description:Dynamically loads a 1x1 pixel image hosted on DBS using javascript. 
                The resulting GET request will ensure SSO is in place.
                A successful response is a good indication that DBS is running.

    TODO:       Test against Channel Secure to ensure it can SSO

    */
({
    image_load : function(component, event, helper) {

        var img = new Image();
        
        img.onload = function(){                    //Image loaded successfully
            component.set("v.isInit", true);        //Load Canvas app
        }
        
        img.onerror = function(){                   //Image failed to load. Show Error
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                mode: 'sticky',
                title: 'DBS Error',
                message: 'DBS is unavailable',
                type: 'error',
            });
            toastEvent.fire();
        }
        
        //Can be any https image url. Does not require a CPS entry
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png';

    }
})
