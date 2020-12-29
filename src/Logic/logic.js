// Logic randomise array - Fisher-Yates Algorithm - taken from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb. 
export const randomiseArray = (playersArray) => {
    for (let i = playersArray.length - 1; i > 0; i -= 1) {
        // for each iteration:

        // get random number between 0 and i index value
        const j = Math.floor(Math.random() * i);

        // get current index value
        const temp = playersArray[i];

        // set current index to equal random index number j
        playersArray[i] = playersArray[j];

        // set random index number to equal i index value
        playersArray[j] = temp;

    }

    // return randomly shuffled array
    return playersArray;
};

// Test logic
// const players = ["Tim", "Bob", "Rob", "Jim", "Zim"]
// console.log(randomiseArray(players));

// Logic for ordering array based on skill
export const balanceTeams = (playersArray) => {
    // sort array on skill, highest to lowest
    const balancedArray = playersArray.sort((a, b) => b.skill - a.skill);

    return balancedArray;
};

//test
// const testarray = [{ name: "Bom", skill: 2 }, { name: "Lom", skill: 5 }, { name: "Kom", skill: 5 }, { name: "Rom", skill: 4 }, { name: "Com", skill: 4 }, { name: "Jom", skill: 3 }, { name: "Tom", skill: 3 }, { name: "Jim", skill: 2 }]
// console.log(balanceTeams(testarray));

// Logic for generating team from array passed in
export const generateTeams = (playersArray) => {
    // middle of array
    const midpoint = playersArray.length / 2;

    // get first 5 players
    const team1 = playersArray.splice(0, midpoint);

    // get remaining 5 players
    const team2 = playersArray;

    // store teams as nested arrays
    const teams = [team1, team2];

    return teams;
};

// test
// const testarray = ["Yaz", "Rob", "Tim", "Bob", "Jim", "Log", "Haz", "Baz", "Tom", "Sam", "a", "B", "CC", "DD"]

// console.log(generateTeams(testarray));