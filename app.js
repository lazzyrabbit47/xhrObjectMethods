document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object 
    const xhr = new XMLHttpRequest();
    // intantiating xmlhttprequest object just like any other object

    // open
    xhr.open('GET', 'data.txt', true);


    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200) {
    // this refers to the object xhr. the xhr object has a property called status which tells you the status of the request
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    //the above code inject the data from the server to the DOM
        }
    }
    //the above code doens't need to check for readyState. becuase by the time onload runs. we kinda already at state 4 so i don't need to check for the state

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }
    //the above code is kinda an old syntax
    xhr.onerror = function(){
        console.log('REQUEST ERROR');
    }
    // the above functin will only run in case an error happend

    xhr.send();

    //to finalize everything we have to do call send() method

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200 : "OK"
    // 403 : "Forbidden"
    // 404: "Not Found"
}