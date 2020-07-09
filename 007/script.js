
// Deel 1


const tellFortune = function (jobTitle, geoLocation, partner, numKids) {
    let future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
        partner + ' ' + 'with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('chef', 'Amsterdam', 'no-one', 0);

// tellFortune('pilot', 'Germany', 'the president', 1);

// tellFortune('singer', 'Russia', 'the queen', 2);


const calculateDogAge = function (age) {
    let dogYears = 7 * age
    console.log('Your dog is ' + dogYears + ' years old in dog years!');
}

calculateDogAge(3);

// calculateDogAge(0.5);

// calculateDogAge(10);

const calculateSupply = function (age, numPerDay) {
    let maxAge = 90;
    let totalNeeded = (maxAge - age) * (numPerDay * 365);
    console.log('You will need ' + totalNeeded + ' cookies to last you until the ripe old age of ' + maxAge);
}

calculateSupply(22, 0.5)


// Deel 2


let myFavMovie = {
    title: 'Titanic',
    duration: 180,
    stars: ['jack', 'the boat', 'the ice-berg']
};

let myLeastFavMovie = {
    title: 'Bad movie',
    duration: 50,
    stars: ['Bob', 'Sarah', 'the car']
}

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes' + ', ' + 'It stars ' + movie.stars.join(', '));
}
printMovie(myLeastFavMovie);