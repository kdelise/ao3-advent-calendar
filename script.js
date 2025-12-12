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
      3: "!NSFW! <br><a href='https://archiveofourown.org/works/41607303' target='_blank'>SungKun</a> but make it fem",
      4: "Story for Day 4!",
      5: "Story for Day 5!",
      6: "Story for Day 6!",
      7: "Story for Day 7!",
      8: "Story for Day 8!",
      9: "Story for Day 9!",
      10: "Story for Day 10!",
      11: "Story for Day 11!",
      12: "Story for Day 12!",
      13: "Story for Day 13!",
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
