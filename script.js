var postUrl = "WEBHOOKURL";

function onSubmit(e) {
  var response = e.response.getItemResponses();
  
  var items = [];
  
  for (var i = 0; i < response.length ; i++) {
    var question = response[i].getItem().getTitle();
    var answer = response[i].getResponse();
    
    if (answer == "") {continue;}
    
    items.push({"name": question, "value": answer, "inline": false});
  }
  
  var options = {
    "method" : "post",
    "payload": JSON.stringify({
      "embeds": [
        {
          "title":"TOP TEXT CHANGE THIS IN SCRIPT",
          "fields":items,
          "footer":{"text": "BOTTOM TEXT CHANGE THIS IN SCRIPT"}
        }
      ]
    }
   )
  };

   UrlFetchApp.fetch(POST_URL, options);
};
