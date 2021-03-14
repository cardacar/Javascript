/* const json = [{name:'afganistan', alpha2code: 'AF'}, {name:'colombia', alpha2code: 'CO'}]

const alpha = json[1].alpha2code

console.log(alpha) */

const ar = [10, 10, 20, 20, 50, 30, 30];
const indices = new Array(ar.length);
indices.fill(0);

for (let i = 0; i < indices.length; i++) {
  for (let j = 0; j < ar.length; j++) {
    if (i == ar[j]) {
      indices[i] = indices[i] + 1;
    }
  }
}

console.log(indices);
