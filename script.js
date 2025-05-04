document.addEventListener('DOMContentLoaded', () => {
    console.log("ForeverFetch site loaded!");
});

document.getElementById('dogQuiz').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for taking the quiz! We'll use this to match you with your perfect dog soon.");
});

//Matching code on form submission
function calculateMatchScore(userTraits, breedTraits) {
    let score = 0;
    for (let trait in userTraits) {
      score += Math.abs(userTraits[trait] - breedTraits[trait]);
    }
    return score;
  }
  
  function findTopMatches(userTraits, breedList, topN = 5) {
    return breedList
      .map(breed => ({
        name: breed.name,
        score: calculateMatchScore(userTraits, breed.traits)
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, topN);
  }
  