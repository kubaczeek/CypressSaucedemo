describe('facts about cats', () => {
  it('get random fact about cat', () => {
        cy.request({
          url: 'https://catfact.ninja/fact',
        }).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body).property('fact').to.not.be.oneOf([null, ""])
          expect(resp.body).property('length').to.not.be.oneOf([null, 0])
          console.log(resp);
        })
  })

})