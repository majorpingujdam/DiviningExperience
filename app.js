// Function to make an API request to the Tarot API
async function getTarotReading() {
    const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=10');
    const data = await response.json();
    return data;
  }
  
  // Function to generate a story based on the tarot cards
  function generateStory(cards) {
    const storyTemplates = [
      // Story Template 1
      function () {
        const storyParts = [];
        storyParts.push("Once upon a time, a young person embarked on a journey of self-discovery.");
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `The ${card.name} appeared, representing ${card.meaning}, signifying the beginning of their quest.`;
          } else if (index === cards.length - 1) {
            sentence = `Finally, the ${card.name} emerged, symbolizing ${card.meaning}, marking the end of their transformative journey.`;
          } else {
            sentence = `Along the way, the ${card.name} revealed itself, embodying ${card.meaning}, guiding them further along their path.`;
          }
          storyParts.push(sentence);
        });
        storyParts.push("Through the lessons and insights gained from each tarot card, the young person grew wiser and more self-aware, ready to face the world with newfound purpose and understanding.");
        return storyParts.join(" ");
      },
      // Story Template 2
      function () {
        const storyParts = [];
        storyParts.push("In a realm of mystical enchantment, a brave soul sought answers to life's greatest mysteries.");
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `As they stepped forward, the ${card.name} materialized, whispering tales of ${card.meaning}, setting the stage for an epic adventure.`;
          } else if (index === cards.length - 1) {
            sentence = `In a grand finale, the ${card.name} emerged from the mists, its essence of ${card.meaning} forever etched in their heart.`;
          } else {
            sentence = `Guided by the enigmatic ${card.name}, radiating with ${card.meaning}, they ventured deeper into the unknown.`;
          }
          storyParts.push(sentence);
        });
        storyParts.push("With each step, each revelation, they pieced together the fragments of their destiny, forever changed by the profound wisdom bestowed upon them by the tarot.");
        return storyParts.join(" ");
      },
      // Story Template 3
      function () {
        const storyParts = [];
        storyParts.push("Amidst the chaos of an uncertain world, a seeker turned to the ancient wisdom of the tarot.");
        cards.forEach((card, index) => {
          let sentence = "";
          if (index === 0) {
            sentence = `The ${card.name} emerged from the shadows, its message of ${card.meaning} a beacon of hope in troubled times.`;
          } else if (index === cards.length - 1) {
            sentence = `With a final flourish, the ${card.name} revealed itself, its promise of ${card.meaning} a guiding light for the path ahead.`;
          } else {
            sentence = `As the ${card.name} danced into view, whispering secrets of ${card.meaning}, the seeker's resolve grew stronger.`;
          }
          storyParts.push(sentence);
        });
        storyParts.push("Armed with the knowledge bestowed by the tarot, the seeker emerged from their journey, ready to navigate the twists and turns of fate with newfound clarity and purpose.");
        return storyParts.join(" ");
      }
    ];
  
    // Randomly select a story template
    const randomIndex = Math.floor(Math.random() * storyTemplates.length);
    const selectedTemplate = storyTemplates[randomIndex];
  
    // Generate the story using the selected template
    const story = selectedTemplate();
    return story;
  }
  
  // Function to display the generated story
  function displayStory(story) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h2>Tarot Card Reading</h2>
      <textarea rows="30" cols="50" readonly>${story}</textarea>
    `;
  }
  
  // Handle form submission
  document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    try {
      const reading = await getTarotReading();
      const story = generateStory(reading.cards);
      displayStory(story);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch tarot cards. Please try again later.');
    }
  });