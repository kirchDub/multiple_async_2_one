function fetchPage(page) {
    let url = "https://swapi.dev/api/people/?page=" + page;
    return fetch(url);
}

function parseAndMatch(){
        let prArray = [];
        let i = 0;
        let fp_promiss = null;
        while ( i < 100) {
            i = i + 1;
            fp_promiss = fetchPage(i);
            if (fp_promiss instanceof Promise) {
                prArray.push(fp_promiss);

            } 
            else {
                console.log('no');
                i = -1;
                return Promise.all(prArray);
            }
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
