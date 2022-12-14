// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (specimenNum, dna) => {
  return{ 
    specimenNum,
    dna,
    mutate(){
    const randIndex = Math.floor(Math.random() * this.dna.length);
    let newBase=returnRandBase();
    while (this.dna[randIndex] ===newBase) {
      newBase = returnRandBase();
    }
    this.dna[randIndex] =newBase;
    return this.dna;
    console.log(this.dna);
    },
    compareDNA(otherOrg){
      const identicalBases=0;
for(let i=0;i<ex1.length;i++){
  for(let j=0;j<ex2.length;j++){
    if(ex1[i]===ex2[j]){
      identicalBases++
    }
  }
}return ((identicalBases/15)*100).toFixed(2);
const percentOfDNAshared = (identicalBases / 16) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive(){
      if(dna.includes('C'||'G'>=9)){
        return true;
      }else{
        return false;
      }
    }
}
}
const selectedResults = [];
let counter = 1;
while (selectedResults.length < 30) {
  let newOrg = pAequorFactory(counter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    selectedResults.push(newOrg);
  }
  counter++;
}
