//Practicando fetch
const fetch = require("node-fetch");
const request = async (code) => {
  const res = await fetch(
    "https://jsonmock.hackerrank.com/api/countries?page=1"
  );
  const data = await res.json();
  const alpha2code = await data.data.map((alpha) => {
    return alpha.alpha2Code;
  });
  const country = await data.data.map((alpha) => {
    return alpha.name;
  });

    let isTrue = true
    let x = 0
    while(isTrue){
        if(alpha2code[x]== code){
            console.log(country[x])
            isTrue = false
        }else{
            x++
        }
    } 

};

request("AX");

/* "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG" */

/* 'Afghanistan',  
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda' */

/* const mapping = new Map();
const name = "Colombia";
const alpha = "CO";
mapping.set(alpha, name);

console.log(mapping);
 */
