function fetchPage(page) {
    let url = "https://swapi.dev/api/people/?page=" + page;
    return fetch(url);
}

function parseAndMatch(){
    let prArray = [];
    for( i = 1; i < 100; i++) {
        try {
        prArray.push(fetchPage(i));
        } catch(e){}    
    }


    return Promise.all(prArray);
}

parseAndMatch()
  .then(res1 => {
    let response = [];
    for (var i = 0; i < res1.length; i++) {
        response.push(res1[i].json());
    
    }    
    return Promise.all( response);
  })
  .then (res2 => {
    let load = [];
    for (var i = 0; i < 8; i++) {
        res2[i].results.map(ppl => {
            load.push({name: ppl.name, films: ppl.films.length});
        }); 
    }  
    console.log(load);

})
