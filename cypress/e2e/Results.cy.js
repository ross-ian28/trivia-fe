describe('Results spec', () => {
  beforeEach(() => {
    // Use uri parameters to get question data
    cy.visit('http://localhost:3000/results?data=%7B%22questions%22%3A%5B%7B%22question%22%3A%22Who+played+Agent+Fox+Mulder+in+the+TV+sci-fi+drama+%5C%22The+X-Files%5C%22%3F%22%2C%22category%22%3A%22Entertainment%3A+Television%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22David+Duchovny%22%2C%22incorrect_answers%22%3A%5B%22Gillian+Anderson%22%2C%22Robert+Patrick%22%2C%22Mitch+Pileggi%22%5D%7D%2C%7B%22question%22%3A%22English+new+wave+musician+Gary+Numan+founded+the+video+game+development+company+Facepunch+Studios+in+March+2009.%22%2C%22category%22%3A%22Entertainment%3A+Video+Games%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22False%22%2C%22incorrect_answers%22%3A%5B%22True%22%5D%7D%2C%7B%22question%22%3A%22What+country+is+Cory+in+the+House+set+in%3F%22%2C%22category%22%3A%22Entertainment%3A+Television%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22The+United+States+of+America%22%2C%22incorrect_answers%22%3A%5B%22Canada%22%2C%22Venezuala%22%2C%22England%22%5D%7D%2C%7B%22question%22%3A%22Who+are+the+original+creators+of+Rachet+%26+Clank%3F%22%2C%22category%22%3A%22Entertainment%3A+Video+Games%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Insomniac+Games%22%2C%22incorrect_answers%22%3A%5B%22PixelTail+Games%22%2C%22Rare%22%2C%22Bethesda%22%5D%7D%2C%7B%22question%22%3A%22Which+of+the+following+characters+is+NOT+a+female+marriage+candidate+in+the+game+Stardew+Valley%3F%22%2C%22category%22%3A%22Entertainment%3A+Video+Games%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Caroline%22%2C%22incorrect_answers%22%3A%5B%22Abigail%22%2C%22Haley%22%2C%22Leah%22%5D%7D%2C%7B%22question%22%3A%22What+do+the+letters+of+the+fast+food+chain+KFC+stand+for%3F%22%2C%22category%22%3A%22General+Knowledge%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Kentucky+Fried+Chicken%22%2C%22incorrect_answers%22%3A%5B%22Kentucky+Fresh+Cheese%22%2C%22Kibbled+Freaky+Cow%22%2C%22Kiwi+Food+Cut%22%5D%7D%2C%7B%22question%22%3A%22In+the+show+%5C%22Steven+Universe%5C%22%2C+who+are+the+main+two+employees+of+The+Big+Donut%3F%22%2C%22category%22%3A%22Entertainment%3A+Cartoon+%26+Animations%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Sadie+and+Lars%22%2C%22incorrect_answers%22%3A%5B%22Steven+and+James%22%2C%22Erik+and+Julie%22%2C%22Bob+and+May%22%5D%7D%2C%7B%22question%22%3A%22When+was+the+DVD+invented%3F%22%2C%22category%22%3A%22Science%3A+Gadgets%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%221995%22%2C%22incorrect_answers%22%3A%5B%222000%22%2C%221990%22%2C%221980%22%5D%7D%2C%7B%22question%22%3A%22What+are+Sans+and+Papyrus+named+after+in+%5C%22Undertale%5C%22%3F%22%2C%22category%22%3A%22Entertainment%3A+Video+Games%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22Fonts%22%2C%22incorrect_answers%22%3A%5B%22Plants%22%2C%22Companies%22%2C%22Ancient+writing+paper%22%5D%7D%2C%7B%22question%22%3A%22What+language+does+Node.js+use%3F%22%2C%22category%22%3A%22Science%3A+Computers%22%2C%22difficulty%22%3A%22easy%22%2C%22correct_answer%22%3A%22JavaScript%22%2C%22incorrect_answers%22%3A%5B%22Java%22%2C%22Java+Source%22%2C%22Joomla+Source+Code%22%5D%7D%5D%2C%22score%22%3A4%7D')
  });

  // Checks page contents
  it('should show finished and score', () => {
    cy.get("h2").should("contain", "You finished!");
    cy.get("h3").should("contain", "You got a 4/10");
  });

  it('should show play again button', () => {
    cy.get(".back-to-home-button").should("contain", "Play Again?");
  });

  // Check page functionality
  it('should go back to intro if play again is clicked', () => {
    cy.get(".back-to-home-button").click();
    cy.url().should('include', '/')
  });
});
