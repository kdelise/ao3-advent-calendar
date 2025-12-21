document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const closePopup = document.getElementById("closePopup");

  const today = new Date().getDate();

  function requiredCalendarDay(dayNumber) {
      return dayNumber + 10;
  }

  const messages = {
      1: "Starting off soft, here's some <br><a href='https://archiveofourown.org/works/59349097' target='_blank'>KunTen!</a>",
      2: "!NSFW! <br>As you see all NSFW ones will be marked, but heres a short <a href='https://archiveofourown.org/works/75258781' target='_blank'>SyongTonSeok</a> for today",
      3: "!NSFW! <br><a href='https://archiveofourown.org/works/41607303' target='_blank'>SungKun</a> but make it religious fem",
      4: "Some domestic <a href='https://archiveofourown.org/works/65589454' target='_blank'>JohnMark</a> <br>ft violinist Mark and soccer star Johnny",
      5: "!NSFW! <br><a href='https://archiveofourown.org/works/70983606' target='_blank'>RenSung</a> where Renjun gets his shit rocked by a guy in captain america boxers",
      6: "!NSFW! <br><a href='https://archiveofourown.org/series/4684270' target='_blank'>JiHyuk</a><br>Can you tell i love fem stories?",
      7: "<a href='https://archiveofourown.org/works/57112399' target='_blank'>NoMin...</a><br>I'm so sorry",
      8: "Curve ball but it's a really cute story I promise<br><a href='https://archiveofourown.org/works/62988229' target='_blank'>Minho x Kitty</a>",
      9: "!NSFW! <br> shitpost <a href='https://archiveofourown.org/works/71290671' target='_blank'>ChenJi</a>",
      10: "Ryo presents and Sakuya is there to comfort him<br><a href='https://archiveofourown.org/works/68548421' target='_blank'>SakuRyo</a>",
      11: "I might've already sent this one<br>but enjoy trans <a href='https://archiveofourown.org/works/56401864' target='_blank'>TtoBin</a>",
      12: "Story for Day 12!",
      13: "<a href='https://archiveofourown.org/works/29008359/chapters/71195499' target='_blank'>KunTen</a><br>Single dad Kun with his triplets who make Ten fall even harder",
      14: "Story for Day 14!",
      15: "Story for Day 15!"
  };

  for (let i = 1; i <= 15; i++) {
      const box = document.querySelector(`.box${i}`);
      const unlockDay = requiredCalendarDay(i);

      box.addEventListener("click", () => {
          if (today >= unlockDay) {
              popupTitle.textContent = `Day ${i}`;
              popupText.innerHTML = messages[i];
              popup.classList.remove("hidden");
          } else {
              alert(`This story unlocks on the ${unlockDay}th!`);
          }
      });
  }

  closePopup.addEventListener("click", () => {
      popup.classList.add("hidden");
  });
});
