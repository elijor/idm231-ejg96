function Bagel(name, description, image, sound) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.sound = sound;

    const soundpath =  "sfx/";
    const soundtype = ".wav";
    this.fullsound = `${soundpath}${Bagel.sound}${soundtype}`;

    const path= "imgs/large_bagel_imgs/";
    const imgtype = ".png";
    this.largeimgfull = `${path}${this.image}${imgtype}`;

}

let bagels = [];

bagels.push(new Bagel("Blueberry Bagel", "You're incredibly curious about the world around you and like to question everything. You tend to favor what's new and exciting, but you're also willing to reflect on classics.", "Large-Blueberry", 1));
bagels.push(new Bagel("Cheese Bagel", "You have a lot of energy, but when you put it to good use great things can happen. You're usually the first to say yes to an opportunity and have the most fun in any situation.", "Large-Cheese", 2));
bagels.push(new Bagel("Cinnamon Bagel", "You are an old soul and have gone through many experiences that you've learned so much from. While you retain an aura of maturity, you're not afraid to do new things.", "Large-Cinnamon", 3));
bagels.push(new Bagel("Egg Bagel", "You are in tune with your emotions and love to listen to others. Your kindness attracts others to you for guidance, friendship, or just to connect.", "Large-Egg", 4));
bagels.push(new Bagel("Everything Bagel", "You're well known and well liked. You manage to be in the spotlight everywhere you go. You have many different talents and skills and can be considered a jack of all trades.", "Large-Everything",5 ));
bagels.push(new Bagel("French Toast Bagel", "You put others first and love to give a helping hand. Sometimes you give too much and need to find time for yourself to recharge and relax.", "Large-FrToast", 6));
bagels.push(new Bagel("Garlic Bagel", "You add spice to life with your hilarious sense of humor and unbelievable stories. You like to share your experiences and jokes with the people around you and you're always open to making new friends", "Large-Garlic", 7));
bagels.push(new Bagel("Onion Bagel", "You find it easy to adapt to a variety of situations and love to explore new ideas and concepts. Your willingness to change and go with the flow helps you succeed in numerous ways.", "Large-Onion",8));
bagels.push(new Bagel("Poppy Seed Bagel", "You like to see things through a positive perspective and favor looking on the brighter side. You are great at solving conflicts because of this and keep a optimistic attitude towards life.", "Large-Poppy", 9));
bagels.push(new Bagel("Rainbow Bagel", "You're incredibly innovative and creative. You love to express yourself in various ways and create. Others see your artistic style inside and out and want to learn more.", "Large-Rainbow", 10));
bagels.push(new Bagel("Sesame Seed Bagel", "You're a pretty straightforward person that enjoys the simple things in life. You have a lot of ideas and great things to share with others in your life.", "Large-Sesame", 11));
bagels.push(new Bagel("Salt Bagel", "You have high ambitions and are a go getter. You are more material than you'd like to admit, but never gets in the way of accomplishing your goals.", "Large-Salt", 12));

function playsound() {
  const sound = bagelNum;
  const soundpath =  "sfx/";
  const soundtype = ".wav";
  const fullsound = `${soundpath}${sound}${soundtype}`;
  const audio = new Audio(fullsound);
  const audioElement = document.getElementById('audioplayer')
  console.log(audioElement)
  audioElement.pause();
  audioElement.currentTime = 0;
  audioElement.src = fullsound;
  audioElement.play();
};

function clickedBagel(e){
    bagelNum = e.id;
    document.getElementById("largespot").src = bagels[bagelNum].largeimgfull;
    document.getElementById("bageltitle").innerText = bagels[bagelNum].name; 
    document.getElementById("bageldescr").innerText = bagels[bagelNum].description;
    for(let x = 0; x < 12; x++){
        if(x != bagelNum)
            document.getElementsByClassName("bagelgroup").item(x).style.filter = "grayscale(100%)";
        else
            document.getElementsByClassName("bagelgroup").item(x).style.filter = "grayscale(0%)";
    };
    playsound();
};


function birthdayselect() {
    let date = document.getElementById("start").value;
    let month = parseInt(date.split("-")[1]);
    let day = parseInt(date.split("-")[2]);
    bagelNum = 0;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        bagelNum = 1
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        bagelNum = 7
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        bagelNum = 5
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        bagelNum = 2
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        bagelNum = 3
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        bagelNum = 10
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        bagelNum = 4
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        bagelNum = 11
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        bagelNum = 0
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        bagelNum = 9
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        bagelNum = 8
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        bagelNum = 6
      };
    document.getElementById("largespot").src = bagels[bagelNum].largeimgfull;
    document.getElementById("bageltitle").innerText = bagels[bagelNum].name; 
    document.getElementById("bageldescr").innerText = bagels[bagelNum].description;
    for(let x = 0; x < 12; x++){
        if(x != bagelNum)
            document.getElementsByClassName("bagelgroup").item(x).style.filter = "grayscale(100%)";
        else
            document.getElementsByClassName("bagelgroup").item(x).style.filter = "grayscale(0%)";
    }
    playsound();
};

const helpbutton = document.querySelector('.tutorial');
const helpoverlay = document.querySelector('.helpoverlay');
const helpexit = document.querySelector('.helpexit');

function openHelp() {
if (helpoverlay.style.display = "none") {
        helpoverlay.style.display = "block";
        helpexit.style.display = "block";
    } else {
        helpoverlay.style.display = "none";
        helpexit.style.display = "none";
    };
  };

  function closeHelp() {
if (helpoverlay.style.display = "block") {
  helpoverlay.style.display = "none";
  helpexit.style.display = "none";
} else {
  helpoverlay.style.display = "block";
  helpexit.style.display = "block";
};
};