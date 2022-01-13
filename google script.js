const POST_URL = "WEBBHOOK URL";

function onSubmit(e) {
    const response = e.response.getItemResponses();
    let items = [];

    for (let answer of response) {
        const question = answer.getItem().getTitle();
        answer = answer.getResponse();
        
        try {
            const parts = answer.match(/[\s\S]{1,1024}/g) || [];
        } catch (e) {
            const parts = answer;
        }

        if (!answer) {
            continue;
        }
        
        for (const part of parts) {
            if (j == 0) {
                items.push({
                    "name": question,
                    "value": part,
                    "inline": false
                });
            } else {
                items.push({
                    "name": question.concat(" (cont.)"),
                    "value": part,
                    "inline": false
                });
            }
        }
    }

    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": "‌",
            "embeds": [{
                "title": "Some nice title here",
              "color": 33023, // This is optional, you can look for decimal colour codes at https://www.webtoolkitonline.com/hexadecimal-decimal-color-converter.html
                "fields": items,
                "footer": {
                    "text": "Some footer here"
                }
            }]
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};
