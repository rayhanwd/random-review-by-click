const review = [
    {
reviewTxt : 'Unfortunately, the crucial sequence is not filmed or edited with the requisite clarity. In 2012 film, Emmerich leaves us befuddled as to exactly what is happening to whom. However, Emmerich’ 2012 deserves credit for offbeat casting.',
authorName : 'Jolil  Khan'
    },
    {
        reviewTxt : 'Cusack supplies his trademark hangdog charm. McCarthy has perhaps his best role ever as Peet’s cocky. Danny Glover lends dignity to the role of the tormented president. Chiwetel ',
        authorName : 'Shakib Khan'
            },
            {
                reviewTxt : 'Ejiofor, as the chief scientist, brings a moving sense of anguish to a stock role. Platt has fun playing the villain of the piece, and Woody Harrelson also chews the scenery as a bug-eyed radio prophet trying to warn his listeners about Armageddon.',
                authorName : 'Salman Khan'
                    },
                    {
                        reviewTxt : 'All in one, 2012’s cinematography, production design and visual effects are awards-worthy. Music also propels the movie. It presents American Idol runner-up, Adam Lambert, who provides a rousing anthem over the end credits.',
                        authorName : 'SRK Khan'
                            },
                            {
                                reviewTxt : 'That is a very short example of review text about film. Most of review text for students of high school when learning English is about movie, book,  and artwork. The structure to write a review text can be started by an introduction, interpretation recount, evaluation, and closed with a summary.',
                                authorName : 'Imran Khan'
                                    }
];

const button = document.querySelector('.btn');

button.addEventListener('click',function(e){
    e.preventDefault();
    const random = Math.floor(Math.random()*review.length);
    document.querySelector('.review-txt').innerHTML = review[random].reviewTxt;
    document.querySelector('.author-Name').innerHTML = review[random].authorName;

})