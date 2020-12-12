/// <reference types="cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        // Técnica de backgroundlogin parajá iniciar um cenário já logado, sem precisar ficar logando
        // cy.setCookie(
        //     'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        //     'R6xmma6F4U6edNQuu67M0h9CvHWYdGE7QEQu30dhvdkFmUq7IYfk1qexa7Q%2BIKakCmVS59HzwdVaubv4m6Sq8n7MYZg3Pr6fmEudR677eH%2B1iwYZomASG3dIzTMYB%2BOGrYVvKjaxy4pabuGcoEp7ySjL6CK0svI6C2Q0vDwUa80csm7QckUZY5p4QT3ac%2FU4elkRXenXnKGbUtEcC7v4WiawkFsxvpMENtd%2BCRLVgeRj6i9fGmeQsg96xdxONObsJ3Rhrms8oBUb1ny6X3Lg%2BVYT%2FkbogHTV6fHgSEB8bsxRnsNWZOtJ0p%2Fi%2F2vg%2F5UnFWbDnN6fs3YL0ejRwhhNjkGKA5PrWm1IPomGKyiKQM%2FwzqjJ56T02VYWVHZ3h2KimnRxzkEiqUuO%2BtltVpDOEkmVBZZu1zCEht2UyN25h5g%3D000314' 
        // )
        cy.backgroundLogin()

        // O endereço de URL é pegado do campo baseURL dentro do arquivo cypress.json
        cy.visit('/');
        // cy.pause()
        let nomeProduto = 'Faded Short Sleeve T-shirts';
        cy.contains(nomeProduto).trigger('mouseover')
        cy.contains(nomeProduto)
            .parent() // h5
            .siblings('div.button-container') // p e divs
            .children('a') // filhos
            .first() // add to cart
            .click()
        // Validndo se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() // h2
            .should('contain.text', 'Product successfully added to your shopping cart')
        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        // Interrompendo o fluxo
        // cy.pause()

        // Seguindo para confirmar os dados da comprar e dados de login
        cy.get(".button-container a[href$='controller=order']").click()
        cy.get(".cart_navigation a[href$='order&step=1']").click()
        // Autenticar o usuário
        // cy.get('#email').type('semana-qa-cypress@mail.com')
        // cy.get('#passwd').type('Apolo2017')
        // cy.get('#SubmitLogin').click()

        // Validando se o endereço de entrega é igual o de cobrança
        //[type=checkbox]#addressesAreEquals
        // Nós teremos 3 parametros: asserção |  atributo | valor
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked');
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same');

        // cy.pause()

        // Seguindo na conclusão da comprar
        cy.get('button[name=processAddress]').click()
        cy.get('[type=checkbox]#cgv').check()
        cy.get('button[name="processCarrier"]').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()
        cy.get('.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

        // Usando o método invoke para invocar uma function JS
        // No caso ele irá invocar um texto dentro do elemento div.box
        // usando o then para passar para frente o valor dos textos dentro do elemento div.box
        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)
            // Usando expressão regular para obter os valores requerentes de um determinado conjunto de dados
            console.log(text.match(/[A-Z][A-Z]+/g)[1])
            // 0 -> RTP
            // 1 -> ID do pedido

            // escrita de um arquivo json com o conteúdo do pedido
            // Dois parametros: caminho do arquivo(sempre a partir do root do projeto) | conteúdo do arquivo
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`})
        })

        cy.get(".cart_navigation a[href$='history']").click()

        // leitura de um arquivo
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
        })

        // [x] 1 - capturar o texto do box
        // [x] 2 - filtrar o texto do box para extrair somente o ID do pedido
        // [x] 3 - armazenar o ID do pedidode alguma forma
        // [x] 4 - obter o ID do pedido armazenado de alguma forma

        // Formas de verificação
        // expect
        // should
    });
});