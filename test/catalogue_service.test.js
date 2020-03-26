const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});
describe("catalogueService.checkBook", () => {
  test("returns true if the book exists in the list", () => {
    expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
  });
});

describe("catalogueService.checkBook", () => {
  test("returns false if the book is not in the list", () => {
    expect(catalogueService.checkBook("Mother Land")).toBe(false);
  });
});
describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns the number of books beginning with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
  });
});
describe("cataloguesService.countBooksByFirstLetter", () => {
  test("returns 0 if no books begin with the given letter", () => {
    expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
  });
});
describe("cataloguesService.countBooksByKeyword", () => {
  test("return a count of how many book titles match a given keyword", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
  });
});
describe("cataloguesService.countBooksByKeyword", () => {
  test("return a count of how many book titles match a given keyword", () => {
    expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
  });
});
describe("cataloguesService.getBooksByAuthor", () => {
  test("return a list of book by a given author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
      "A Tale of Two Cities by Charles Dickens",
      "Oliver Twist by Charles Dickens",
      "Great Expectations by Charles Dickens"
    ]);
  });
});
