/// <reference types="cypress" />

describe("data base", () => {
  it("query admin", () => {
    cy.task("queryDb", "select * from belajar_mysql.admin;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.property("id");
      expect(res[1]).to.have.property("first_name");
      expect(res[2]).to.have.property("last_name");
      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });

  it("query products", () => {
    cy.task("queryDb", "select * from belajar_mysql.products;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.property("id");
      expect(res[1]).to.have.property("name");
      expect(res[2]).to.have.property("category");
      expect(res[3]).to.have.property("description");
      expect(res[4]).to.have.property("price");
      expect(res[5]).to.have.property("quantity");
      expect(res[6]).to.have.property("created_at");
      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });

  it("query barang", () => {
    cy.task("queryDb", "select * from belajar_mysql.barang;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.property("id");
      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });
});
