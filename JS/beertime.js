const year = new Date().getFullYear();
const countDown = document.getElementById('countdown');
const filled = document.getElementById('filled');
const img = document.querySelector('img');
const glass = document.getElementById('glass');
const holder = document.getElementById('holder');
const beerTimeText = document.getElementById('beertime_text');
const onlyTap = document.getElementById('onlytap');
const flowingBeer = document.getElementById('flowingbeer')
const risingFoam = document.getElementById('rising_foam');
const risingBeer = document.getElementById('rising_beer');
const risingBubbles = document.getElementById('bubbles');
const weekend = document.getElementById('weekend');
let numCeleb = 0; 

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
   
    document.title = '🍺 Bieruur! 🍺';
    glass.style.display = 'none';
    filled.textContent = '';
    filled.style.marginTop = '0px';
    holder.style.display = 'none';

    beerTimeText.textContent = '🍺 Bieruur! 🍺';

    risingBubbles.style.zIndex = 0;

    document.querySelector('.container_beertap').style.display = 'block';

    document.querySelector('.container_info').style.height = '0px';

    const divGlass = document.createElement('div');
    const img = document.createElement('img');
    divGlass.setAttribute('id', 'glass_fr16');

    const containerGlass = document.querySelector('.container_glass');

    img.src = "./images/beer25.jpg";
    img.style.animation = 'filling 3s';
    divGlass.append(img);
    containerGlass.append(divGlass);

    document.body.style.backgroundColor = '#331814';
    divGlass.style.visibility = 'visible';

    countDown.style.marginTop = '10%';


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
        containerGlass.removeChild(divGlass);

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


  if ( countDownTime < 0 && (dayOfBeerTime == 5 && hourOfBeerTime == 16) ) // Vrijdag 16 uur.. 
       
     {

        zakhooi_Fr16();

    }
    else if (dayOfBeerTime == 0 || dayOfBeerTime == 6 ||  // Als het zaterdag of zondag is...
        (dayOfBeerTime == 5 && hourOfBeerTime >= 17) ||   // ..of vrijdag (na) 17 uur..
        dayOfBeerTime == 1 && hourOfBeerTime <= 7) {    //  .. of maandag voor 7 uur..

        const textWeekend = "<img src='./images/beer.jpg'> <p id='weekend'> Weekend!";
        weekend.innerHTML = textWeekend;
        document.body.style.backgroundImage = "";
        document.querySelector('.container_beertap').style.display = 'none';
        document.title = 'Fijn weekend!';
        glass.style.display = 'none';
        holder.style.display = 'none';
        filled.style.marginTop = '10%';

        if (numCeleb <=3) {
         celebrate();
        }

        numCeleb++
    }

    else {
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
        `${528 * beerCovered}px`;

        risingBeer.style.top =
       `${(409 * beerCovered) + 119}px`;
 
       /*
       risingBubbles.style.top = 
       `${(409 * beerCovered) -295}px`;
      */
       }
}


