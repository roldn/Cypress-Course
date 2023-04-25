

describe('Handle Tables', () => {
  
  beforeEach('Login', () => {

    cy.visit('https://demo.opencart.com/admin/index.php')
    cy.get('#input-username').type("demo")
    cy.get('#input-password').type("demo")
    cy.get("button[type='submit']").click()

    cy.get(".btn-close").click()

    //Customer --> customer

    cy.get("#menu-customer>a").click() //customer main menu
    cy.get("#menu-customer>ul>li:first-child").click() //customer sub/child item

  })

  it('Check n° of Rows & Columns', () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
  })

  it('Check cell data from a specific row & column', () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
    .contains("princytrainings4@gmail.com")
  })

  it('Read all the rows & columns data in the firs page', () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
      .each(($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          })
        })
      })
  })
 
  
  it.only('Pagination', () => {
    
    let totalPages

    // find total number of pages
    // cy.get(".col-sm-6.text-end").then((e)=> {
    //   let mytext = e.text();
    //   totalPages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);

    //   cy.log("Total number of pages ===> " + totalPages)
    // })

    totalPages = 5;

    // totalPages = Number(totalPages)

    for(let i=1; i< totalPages; i++){

      if(totalPages>1){

        cy.log("Active page is === " + i)

        cy.get(`ul[class='pagination']>li:nth-child(${i})>`).click()

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows) => {

          cy.wrap($row).within( () => {

            cy.get('td:nth-child(3)').then((e)=>{

              cy.log(e.text()) //Email
              
            })
          })
        })
      }
    }
  })




})
