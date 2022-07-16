if(document.querySelector('.htm')){
    var button=document.querySelector(".button");
    var circle=document.querySelector(".circle");

    let bon=false;

    button.addEventListener("click",()=>{
         if(!bon){
            bon=true;
            circle.style.animation="circleright 0.5s forwards";
            button.style.animation="bgyellow 0.5s forwards";
            chrome.tabs.query({ active: true }, function (tabs) {
                let tab = tabs[0];
                chrome.scripting.executeScript(
                  {
                    target: { tabId: tab.id },
                    function: dark
                  }
                );
              });    
         }
         else{
         bon=false;
         circle.style.animation="circleleft 0.5s forwards";
         button.style.animation="bgblue 0.5s forwards";
         chrome.tabs.query({ active: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript(
              {
                target: { tabId: tab.id },
                function: light
              }
            );
          });   
        }})
    function dark(){
        document.querySelector('html').style.filter="invert(1) hue-rotate(180deg)";
        let media=document.querySelectorAll("img, photos, video ");
        media.forEach((eachmedia)=>{
            eachmedia.style.filter="invert(1) hue-rotate(180deg)";
        })
    }
    function light(){
        document.querySelector('html').style.filter="invert(0) hue-rotate(0deg)";
        let media=document.querySelectorAll("img, photos, video, ytp-player-content ytp-iv-player-content ");
        media.forEach((eachmedia)=>{
            eachmedia.style.filter="invert(0) hue-rotate(0deg)";
        })
    }
}

