describe('Intro spec', () => {
  beforeEach(() => {
    // Use uri parameters to get question data
    cy.visit('http://localhost:3000/question1?data=%7B%22questions%22%3A%5B%7B%22question%22%3A%22Area+51+is+located+in+which+US+state%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Nevada%22%2C%22incorrect_answers%22%3A%5B%22Arizona%22%2C%22New+Mexico%22%2C%22Utah%22%5D%7D%2C%7B%22question%22%3A%22On+a+dartboard%2C+what+number+is+directly+opposite+No.+1%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%2219%22%2C%22incorrect_answers%22%3A%5B%2220%22%2C%2212%22%2C%2215%22%5D%7D%2C%7B%22question%22%3A%22What+word+represents+the+letter+%27T%27+in+the+NATO+phonetic+alphabet%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Tango%22%2C%22incorrect_answers%22%3A%5B%22Target%22%2C%22Taxi%22%2C%22Turkey%22%5D%7D%2C%7B%22question%22%3A%22Nutella+is+produced+by+the+German+company+Ferrero.%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22False%22%2C%22incorrect_answers%22%3A%5B%22True%22%5D%7D%2C%7B%22question%22%3A%22What+is+on+display+in+the+Madame+Tussaud%27s+museum+in+London%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Wax+sculptures%22%2C%22incorrect_answers%22%3A%5B%22Designer+clothing%22%2C%22Unreleased+film+reels%22%2C%22Vintage+cars%22%5D%7D%2C%7B%22question%22%3A%22When+you+cry+in+space%2C+your+tears+stick+to+your+face.%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22True%22%2C%22incorrect_answers%22%3A%5B%22False%22%5D%7D%2C%7B%22question%22%3A%22Romanian+belongs+to+the+Romance+language+family%2C+shared+with+French%2C+Spanish%2C+Portuguese+and+Italian.+%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22True%22%2C%22incorrect_answers%22%3A%5B%22False%22%5D%7D%2C%7B%22question%22%3A%22What+was+the+first+ever+London+Underground+line+to+be+built%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Metropolitan+Line%22%2C%22incorrect_answers%22%3A%5B%22Circle+Line%22%2C%22Bakerloo+Line%22%2C%22Victoria+Line%22%5D%7D%2C%7B%22question%22%3A%22The+Flag+of+the+European+Union+has+how+many+stars+on+it%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%2212%22%2C%22incorrect_answers%22%3A%5B%2210%22%2C%2214%22%2C%2216%22%5D%7D%2C%7B%22question%22%3A%22Waluigi%27s+first+appearance+was+in+what+game%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Mario+Tennis+64+%28N64%29%22%2C%22incorrect_answers%22%3A%5B%22Wario+Land%3A+Super+Mario+Land+3%22%2C%22Mario+Party+%28N64%29%22%2C%22Super+Smash+Bros.+Ultimate%22%5D%7D%5D%2C%22score%22%3A0%7D')
  });

  // Checks page contents
  it('should show page question', () => {
    cy.get("h1").should("contain", "Question 1/10");
    cy.get("h2").should("contain", "Area 51 is located in which US state?");
  });

  it('should show all 4 choice options', () => {
    cy.get("form").within(() => {
      cy.contains("label", 'Nevada')
      cy.contains("label", 'New Mexico')
      cy.contains("label", 'Arizona')
      cy.contains("label", 'Utah')
    });
  });

  it('should show true or false', () => {
    cy.visit('http://localhost:3000/question4?data=%7B%22questions%22%3A%5B%7B%22question%22%3A%22Area+51+is+located+in+which+US+state%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Nevada%22%2C%22incorrect_answers%22%3A%5B%22Arizona%22%2C%22New+Mexico%22%2C%22Utah%22%5D%7D%2C%7B%22question%22%3A%22On+a+dartboard%2C+what+number+is+directly+opposite+No.+1%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%2219%22%2C%22incorrect_answers%22%3A%5B%2220%22%2C%2212%22%2C%2215%22%5D%7D%2C%7B%22question%22%3A%22What+word+represents+the+letter+%27T%27+in+the+NATO+phonetic+alphabet%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Tango%22%2C%22incorrect_answers%22%3A%5B%22Target%22%2C%22Taxi%22%2C%22Turkey%22%5D%7D%2C%7B%22question%22%3A%22Nutella+is+produced+by+the+German+company+Ferrero.%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22False%22%2C%22incorrect_answers%22%3A%5B%22True%22%5D%7D%2C%7B%22question%22%3A%22What+is+on+display+in+the+Madame+Tussaud%27s+museum+in+London%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Wax+sculptures%22%2C%22incorrect_answers%22%3A%5B%22Designer+clothing%22%2C%22Unreleased+film+reels%22%2C%22Vintage+cars%22%5D%7D%2C%7B%22question%22%3A%22When+you+cry+in+space%2C+your+tears+stick+to+your+face.%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22True%22%2C%22incorrect_answers%22%3A%5B%22False%22%5D%7D%2C%7B%22question%22%3A%22Romanian+belongs+to+the+Romance+language+family%2C+shared+with+French%2C+Spanish%2C+Portuguese+and+Italian.+%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22True%22%2C%22incorrect_answers%22%3A%5B%22False%22%5D%7D%2C%7B%22question%22%3A%22What+was+the+first+ever+London+Underground+line+to+be+built%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Metropolitan+Line%22%2C%22incorrect_answers%22%3A%5B%22Circle+Line%22%2C%22Bakerloo+Line%22%2C%22Victoria+Line%22%5D%7D%2C%7B%22question%22%3A%22The+Flag+of+the+European+Union+has+how+many+stars+on+it%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%2212%22%2C%22incorrect_answers%22%3A%5B%2210%22%2C%2214%22%2C%2216%22%5D%7D%2C%7B%22question%22%3A%22Waluigi%27s+first+appearance+was+in+what+game%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Mario+Tennis+64+%28N64%29%22%2C%22incorrect_answers%22%3A%5B%22Wario+Land%3A+Super+Mario+Land+3%22%2C%22Mario+Party+%28N64%29%22%2C%22Super+Smash+Bros.+Ultimate%22%5D%7D%5D%2C%22score%22%3A1%7D')
    cy.get("form").within(() => {
      cy.get("label").eq(0).should("contain", "True");
      cy.get("label").eq(1).should("contain", "False");
    });
  });

  // Check page functionality
  it('should display message and change submit button if answer is right', () => {
    cy.get("form").within(() => {
      cy.contains("label", 'Nevada').click();
      cy.get(".question-button").should('contain', 'Submit').click();
    });
  });

  it('should display message and change submit button if answer is wrong', () => {
    cy.get("form").within(() => {
      cy.get("label").eq(2).click();
      cy.get(".question-button").should('contain', 'Submit').click();
    });
  });
});
