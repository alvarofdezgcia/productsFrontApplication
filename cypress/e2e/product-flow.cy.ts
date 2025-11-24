describe('Product Flow', () => {
    it('should navigate from list to detail and add to cart', () => {
        cy.visit('/');

        // Check if products are loaded
        cy.get('.product-item', { timeout: 10000 }).should('have.length.gt', 0);

        // Search
        cy.get('.search-bar input').type('Acer');
        cy.get('.product-item').should('contain', 'Acer');

        // Click first product
        cy.get('.product-item').first().click();

        // Check detail page
        cy.url().should('include', '/product/');
        cy.get('.product-detail-page').should('be.visible');

        // Select options if needed
        cy.get('body').then(($body) => {
            if ($body.find('.option-btn').length > 0) {
                cy.get('.action-group').each(($group, index, $list) => {
                    cy.wrap($group).find('.option-btn').first().click();
                });
            }
        });

        // Add to cart
        cy.get('.add-to-cart-btn').click();

        // Verify alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added to cart!');
        });

        // Verify cart count updated
        cy.get('.cart-info').should('contain', 'Cart:');
    });
});
