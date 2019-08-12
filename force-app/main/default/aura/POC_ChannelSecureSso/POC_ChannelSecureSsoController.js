({
    /*
    Description:The following example uses XHR to call a a REST Service hosted on DBS.
                The REST service was arbitrarily called /healthcheck/status. 
                The healthcheck service could perform a simple diagnostic and return "status:OK" if DBS is up and running.
                This healthcheck_service function displays any errors in toast.

    TODO:       Test against Channel Secure to ensure it can SSO an XHR call

    XHR Ref:    https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    */
    healthcheck_service : function(component, event, helper) {
        
        var request = new XMLHttpRequest();
		request.open("GET", "https://shielded-woodland-96449.herokuapp.com/jax-rs/healthcheck/status");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		request.send();
		request.onreadystatechange = function(){

            
            if (this.readyState == 4 && this.status == 200) {   //DBS is up
                
                let responseBody = JSON.parse(this.responseText);
                
                if(responseBody.status === "OK"){                //DBS is functioning
                    component.set("v.isInit", true);
                }

                else {                                          //DBS is having internal problems
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        mode: 'sticky',
                        title: 'DBS Error',
                        message: 'DBS is available but having internal problems. Details: '+ responseBody.status,
                        type: 'error',
                    });
                    toastEvent.fire();
                }

                

            } else if (this.readyState == 4 && this.status != 200) { //DBS is down
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    mode: 'sticky',
                    title: 'DBS Error',
                    message: 'DBS is not available. Response Code: '+ this.status + ' : ' + this.statusText,
                    type: 'error',
                });
                toastEvent.fire();
            }

        }
    }
})
