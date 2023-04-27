

export class NavigationPage{

    homePage()
    {
 
        cy.get('a').contains('Main').click()
       // cy.get(':nth-child(1) > .dropdown-toggle > strong').click()
        cy.contains('Home').click()
        cy.title().should('eq', 'TSHARP - Home')
    }
    designationsPage()
    {
        cy.get('a').contains('Main').click()
        cy.contains('Designations').click()
        cy.title().should('eq', 'TSHARP - Designations')
    }

    qualificationsPage()
    {
        cy.get('a').contains('Main').click()
        cy.contains('Qualifications').click()
        cy.title().should('eq', 'TSHARP - Qualifications')
    }

    syllabiPage()
    {
        cy.get('a').contains('Main').click()
        cy.contains('Syllabi').click()
        cy.title().should('eq', 'TSHARP - Syllabi')
    }

    studentTrackerPage()
    {
        cy.get('a').contains('Main').click()
        cy.contains('Student Tracker').click()
        cy.title().should('eq', 'TSHARP - Student Tracker')
    }

    flightListPage()
    {
        cy.contains('Flights').click()
        cy.contains('Flight List').click()
        cy.title().should('eq', 'TSHARP - Flight List')
    }

    ipartsRecoveriesPage()
    {
        cy.contains('Flights').click()
        cy.contains('IPARTS Recoveries').click()
        //cy.contains('OK').click()
        cy.get('#CommandDefaultsHeaderId').click();
        cy.title().should('eq', 'TSHARP - IPARTS Recoveries')
    }

    schedulerPage()
    {
        cy.contains('Scheduler').click()
        //cy.contains('Scheduler').click()
        cy.get('.dropdown-menu').contains('Scheduler').click()
        cy.title().should('eq', 'TSHARP - Scheduler')
       
    }
    
    resourcesPage()
    {
        cy.contains('Scheduler').click()
        cy.contains('Resources').click({force: true})
        cy.title().should('eq', 'TSHARP - Resources')
    }
    groundEventsPage()
    {
        cy.contains('Scheduler').click()
        cy.contains('Ground Events').click()
        cy.title().should('eq', 'TSHARP - Ground Events')
    }

    trainingCalendarPage()
    {
        cy.contains('Scheduler').click()
        cy.contains('Training Calendar').click()
        cy.title().should('eq', 'TSHARP - Training Calendar')
    }

    scheduleBlocksPage()
    {
        cy.contains('Scheduler').click()
        cy.contains('Schedule Blocks').click()
        cy.title().should('eq', 'TSHARP - Schedule Blocks')
    }
    
    referencesPage()
    {
        cy.contains('Library').click()
        cy.contains('References').click()
        cy.title().should('eq', 'TSHARP - References')
    }

    coursewarePage()
    {
        cy.contains('Library').click()
        cy.contains('Courseware').click()
        cy.title().should('eq', 'TSHARP - Courseware')
    }

    prebuiltReportsPage()
    {
        cy.contains('Reports').click()
        cy.contains('Prebuilt Reports').click()
        cy.title().should('eq', 'TSHARP - Prebuilt Reports')
    }

    LogBookPage()
    {
        cy.contains('Reports').click()
        cy.contains('3710 Logbook').click({force: true})
        cy.title().should('eq', 'TSHARP - 3710 Logbook')
    }

    configurableLogbookPage()
    {
        cy.contains('Reports').click()
        cy.contains('Configurable Logbook').click()
        cy.title().should('eq', 'TSHARP - Configurable Logbook')
    }

    dynamicNAVFLIRPage()
    {
        cy.contains('Reports').click()
        cy.contains('Dynamic NAVFLIR').click()
        cy.title().should('eq', 'TSHARP - Dynamic NAVFLIR')
    }

    nssPage()
    {
        cy.contains('Reports').click()
        cy.contains('Naval Standard Score').click()
        cy.title().should('eq', 'TSHARP - Naval Standard Score (NSS)')
    }

    skillTrendAnalysisPage()
    {
        cy.contains('Reports').click()
        cy.contains('Skill Trend Analysis').click()
        cy.title().should('eq', 'TSHARP - Skill Trend Analysis')

    }

    ipartsPassAnalysisPage()
    {
        cy.contains('Reports').click()
        cy.contains('Iparts Pass Analysis').click()
        cy.title().should('eq', 'Iparts Pass Analysis')
    }
    setUpPage()
    {
        cy.contains('Setup').click()
        cy.title().should('eq', 'TSHARP - Setup')
        
    }
    

}


export const navigateTo = new NavigationPage()