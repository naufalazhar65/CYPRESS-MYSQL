/// <reference types="cypress" />

describe("data base", () => {
  it("query admin", () => {
    cy.task("queryDb", "select * from belajar_mysql.admin;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[1]).to.have.property("id", 5);
      expect(res[1]).to.have.property("first_name", "Naufal");
      expect(res[1]).to.have.property("last_name", "Azhar");
      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });

  it("query products", () => {
    cy.task("queryDb", "select * from belajar_mysql.products;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[1]).to.have.property("id", "P0002");
      expect(res[1]).to.have.property("name", "Mie Ayam Bakso");
      expect(res[1]).to.have.property("category", "Makanan");
      expect(res[1]).to.have.property("description", "Mie Ayam Original + baksor");
      expect(res[1]).to.have.property("price", 20000);
      expect(res[1]).to.have.property("quantity", 100);
      expect(res[1]).to.have.property("created_at");
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

  it("query orders", () => {
    cy.task("queryDb", "select * from belajar_mysql.orders;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.property("id");
      expect(res[1]).to.have.property("total");
      expect(res[1]).to.have.property("order_date");
      // expect(res[3]).to.have.property("quantity");
      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });

  it("query orders_detail", () => {
    cy.task("queryDb", "select * from belajar_mysql.orders_detail;").then((res) => {
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.property("id_product");
      expect(res[1]).to.have.property("id_order");
      expect(res[1]).to.have.property("price");
      expect(res[1]).to.have.property("quantity");

      var rec = res;
      const result = Object.values(rec[0]);
      cy.log(result[0]);
      cy.log(result[1]);
    });
  });
});
