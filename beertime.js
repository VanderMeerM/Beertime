const year = new Date().getFullYear();
const countDown = document.getElementById('countdown');
const filled = document.getElementById('filled');
const img = document.querySelector('img');
const glass = document.getElementById('glass');
const onlyTap = document.getElementById('onlytap');
const flowingBeer = document.getElementById('flowingbeer')
const risingFoam = document.getElementById('rising_foam');
const risingBeer = document.getElementById('rising_beer');
const risingBubbles = document.getElementById('bubbles');
const weekend = document.getElementById('weekend');

let zakHooi;


function celebrate() {
   
const canvasWeekend = document.getElementById('canvas');
const jsConfetti = new JSConfetti({ canvasWeekend })

    let allEmojis = ['🥳', '🍀', '🎉', '🎈', '🎊']

    jsConfetti.addConfetti(

        {
            emojis: [allEmojis],
            emojiSize: 20,
            confettiNumber: 25,
        })
}

function zakhooi_Fr16() {

   if (zakHooi) {
    clearInterval(zakHooi)
   }
   
    //document.getElementById('beertime').textContent = '🍺 Biertijd! 🍺';
    document.title = '🍺 Bieruur! 🍺';
    glass.style.display = 'none';
   filled.textContent = '';
   filled.style.marginTop = '0px';

    countDown.textContent = '🍺 Bieruur! 🍺';
    risingBubbles.style.zIndex = 0;

    document.querySelector('.container_beertap').style.display = 'block';

    document.querySelector('.container2').style.height = '0px';

    const divGlass = document.createElement('div');
    //const img_foam = document.createElement('img');
    const img = document.createElement('img');
    divGlass.setAttribute('id', 'glass_fr16');

    const container = document.querySelector('.container');

    //const glass = document.getElementById('glass');

    img.src = "./Beertime/images/beer25.jpg";
    img.style.animation = 'filling 3s';
   // img_foam.src = "./Countdown_beertime/images/foam.jpg";
    //img_foam.style.height = `30px`; //"./Countdown_beertime/images/beer_yellow.jpg";
    //divGlass.append(img_foam);
    divGlass.append(img);
    container.append(divGlass);

    document.body.style.backgroundColor = '#331814';
    divGlass.style.visibility = 'visible';

    countDown.style.marginTop = '100px';


    onlyTap.style.transform = 'rotate(-50deg)';

    if (screen.width <= 785) {
        flowingBeer.style.top = '-30px';
        flowingBeer.style.left = '-180px';
    }
    else {
        flowingBeer.style.top = '230px';
        flowingBeer.style.left = '-560px';

    }

    if (screen.width > 756) {
        onlyTap.style.top = '-60px';
        onlyTap.style.left = '-560px';

    } else {
        onlyTap.style.top = '-360px';
        onlyTap.style.left = '-160px';

    }
    flowingBeer.style.visibility = 'visible';

    divGlass.style.animation = 'glass_to_straight_position 2s';
    //divGlass.style.animation = 'movetoleft 6s';

    setTimeout(() => {
        const array = [-1, 1];
        const random = Math.round(Math.random());
        const direction = array[random] + '100' + '%';
        divGlass.style.transform = `translate(${direction})`;
        divGlass.style.transitionDuration = "2s";
        onlyTap.style.transform = 'rotate(0deg)';
        if (screen.width > 756) {
            onlyTap.style.top = '-130px';
            onlyTap.style.left = '-460px';
        } else {
            onlyTap.style.top = '-410px';
            onlyTap.style.left = '-70px';
        }
        flowingBeer.style.visibility = 'hidden';

    }, 4000)

    setTimeout(() => {
        container.removeChild(divGlass);

    }, 5000)

    setTimeout(() => {
        zakhooi_Fr16();
    }, 6000)
}


zakhooi();


 zakHooi = setInterval(() => {
    zakhooi(), 1000
})



// zakhooi_Fr16(); voor testdoeleinden activeren 


function zakhooi() {

    const dayOfBeerTime = new Date().getDay();
    const hourOfBeerTime = new Date().getHours();
    const now = new Date().getTime();

    const daysUntilFriday = 5 - new Date().getDay();
    const beerTime = new Date(year, new Date().getMonth(), (new Date().getDate() + daysUntilFriday), 16).getTime();
    const mondayBeforeFriday = daysUntilFriday - 4;
    const startOnMonday = new Date(year, new Date().getMonth(), (new Date().getDate() + mondayBeforeFriday), 8).getTime();

    let countDownTime = (beerTime - now) / 1000;
    let beerCovered = (beerTime - now) / (beerTime - startOnMonday);

    //countDown.style.marginTop = '80px';


   if ( countDownTime < 0 && (dayOfBeerTime == 5 && hourOfBeerTime == 16) )
   
     {

        zakhooi_Fr16();

    }
    else if (dayOfBeerTime == 0 || dayOfBeerTime == 6 ||
        (dayOfBeerTime == 5 && hourOfBeerTime >= 17) ||
        dayOfBeerTime == 1 && hourOfBeerTime <= 7) {

        const textWeekend = "<img src='Beertime/images/beer.jpg'> <p id='weekend'> Fijn weekend!";
        //countDown.style.color = 'orange';
        weekend.innerHTML = textWeekend;
      //  document.querySelector('.container2').style.backgroundColor = 'white';
        document.body.style.backgroundImage = "";
      //  document.body.style.backgroundColor = 'white';
        document.querySelector('.container_beertap').style.display = 'none';
        document.title = 'Fijn weekend!';
        glass.style.display = 'none';
        filled.style.marginTop = '10%';

        //celebrate();
    }

    else {
       // risingBeer.src = "./Countdown_beertime/images/beer_yellow.jpg";
        risingFoam.src = "./images/foam.jpg";
        document.body.style.backgroundColor = '#331814';
        glass.style.visibility = 'visible';
        glass.style.display = 'block';
        document.querySelector('.container_beertap').style.display = 'none';

        let hours = Math.floor(countDownTime / 3600);
        let resthour = countDownTime % 3600;
        let minutes = Math.floor(resthour / 60);
        if (minutes < 10) {
            minutes = '0' + Math.floor(resthour / 60);
        }
        let seconds = Math.floor(resthour % 60).toFixed(0);
        if (seconds < 10) {
            seconds = '0' + Math.floor(resthour % 60);
        }

        let count = `${hours}:${minutes}:${seconds}`
        countDown.textContent = count;
        let percentage = ((1 - beerCovered) * 100);

        if (percentage.toFixed(0) < 10) {
            risingFoam.style.visibility = 'hidden';
           }

        if (percentage.toFixed(0) >= 10) {
        risingBubbles.style.zIndex = 1;
       }

        if (percentage.toFixed(0) == 50) {
            filled.innerHTML = `<p> Glas half vol/leeg`;
            document.title = `${count} (glas half vol/leeg)`;
        }
        else {
            filled.innerHTML = `<p class="brown_background"> </p> Glas ${percentage.toFixed(1)}% vol`;
            document.title = `${count} (${percentage.toFixed(0)}% vol)`;
        }

        risingFoam.style.top = 
       //`${document.getElementById('rising_foam').naturalHeight}px`;
        `${538 * beerCovered}px`;
        //`${(document.getElementById('rising_foam').naturalHeight * beerCovered)}px`;

        risingBeer.style.top =
      // `${(risingBeer.naturalHeight * beerCovered) + 119}px`;
       `${(409 * beerCovered) + 119}px`;

       risingBubbles.style.top = 
       `${(409 * beerCovered) -295}px`;
       
       }
}


