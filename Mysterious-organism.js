// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Factory function to create pAequor objects
  const pAequorFactory = (number, array) => {
    return {
      specimenNum: number,
      dna: array,
  
      // Method to mutate a random DNA base
      mutate() {
        let randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
  
        // Ensure the new base is different from the current base at randomIndex
        while (this.dna[randomIndex] === newBase) {
          newBase = returnRandBase();
        }
  
        // Update the DNA with the new base
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
  
      // Method to compare DNA with another strand
      compareDna(otherDna) {
        let matchCount = 0;
  
        // Compare each base with the other strand
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherDna[i]) {
            matchCount++;
          }
        }
  
        const percentage = Math.floor((matchCount / this.dna.length) * 100);
        console.log(`Specimen ${this.specimenNum} and Specimen have ${percentage}% DNA in common.`);
      },
  
      // Method to determine if the specimen is likely to survive
      willLikelySurvive() {
        let count = 0;
  
        // Count the 'C' and 'G' bases in the DNA strand
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            count++;
          }
        }
  
        // Calculate survival likelihood
        const percentage = (count / this.dna.length) * 100;
        return percentage >= 60;
      }
    };
  };
  
  // Example usage
  let currentDna = mockUpStrand();
  let specimen = pAequorFactory(2, mockUpStrand());
  
  console.log(specimen);
  specimen.mutate();
  specimen.compareDna(currentDna);
  console.log('Will Likely Survive:', specimen.willLikelySurvive());
  
