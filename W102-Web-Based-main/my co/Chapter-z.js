function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                loadCont.append(allText);
                console.log(allText);
                return (allText);

                // var final = onStreamProcessed(allText)
                // loadCont.append(final)
            }
        }
    };

}

function listOL(list) {
    item = list.split('!!!');

    var partContainer = document.createElement('ol');
    for (let i = 0; i < item.length; i++) {
        const partContainer2 = document.createElement('li');
        partContainer2.createElement = ('li')
        partContainer2.textContent = item[i];
        partContainer.appendChild(partContainer2);
        // console.log(partContainer);



    }
    // console.log(partContainer);
    return partContainer
}

function listUL(list) {
    item = list.split('!!!');

    var partContainer = document.createElement('ul');
    for (let i = 0; i < item.length; i++) {
        const partContainer2 = document.createElement('li');
        partContainer2.createElement = ('li')
        partContainer2.textContent = item[i];
        partContainer.appendChild(partContainer2);
        // console.log(partContainer);



    }
    // console.log(partContainer);
    return partContainer
}

//creating function
function thatfetch(file) {
    fetch(file)
        .then(response => response.text())
        .then(text => {
            const container = document.createElement('div');
            var matcher1 = "ol";
            var matcher2 = "ul";
            const location = document.querySelector('#input');
            // split the text at the specified word
            let lines = text.split('\n');
            lines.forEach(lines => {
                const parts = lines.split('---');
                // create a new element to hold the parts
                const partContainer = document.createElement(parts[1]);
                
                if (parts[1].match(matcher1)) {
                    const listItems = parts[2];
                    var retSplit = listOL(listItems);
                    partContainer.appendChild(retSplit);
                    partContainer.className = parts[0]

                    console.log(container);
                }
                else if(parts[1].match(matcher2)) {
                    const listItems = parts[2];
                    var retSplit = listUL(listItems);
                    console.log(retSplit);
                    partContainer.appendChild(retSplit);
                    partContainer.className = parts[0]
                    console.log(container)
                }
                else {
                    partContainer.textContent = parts[2];
                    partContainer.className = parts[0];
                }
                container.appendChild(partContainer);
            })
            location.appendChild(container);
        });
}

// Read the .txt file into a string
let lines = thatfetch('Chapter-y.txt');

window.addEventListener("DOMContentLoaded", thatfetch, false);
