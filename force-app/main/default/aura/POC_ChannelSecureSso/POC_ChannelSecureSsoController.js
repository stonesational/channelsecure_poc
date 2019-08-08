({
    doInit : function(component, event, helper) {
        var request = new XMLHttpRequest();
		request.open("GET", "https://bc-demo-api.herokuapp.com/api");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		request.send();
		request.onreadystatechange=function(){
            if (this.readyState == 4 && this.status == 200) { //Done sucess
                console.log("STONE: request.responseText: " + request.responseText);
                component.set("v.isInit", true);
            } else if (this.readyState == 4 && this.status != 200) { //Done failure
                alert("Unsuccessful: " + request.statusText + request.status);
            }
        }
    }
})
