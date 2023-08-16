
class config {
    GetURL() {
        let envi = Cypress.env('ENV');
            switch (envi) 
            {
                case 'production':
                    URL = "";
                case 'staging':
                    URL = "";
                case "dev": 
                    URL= "https://automationintesting.online/";
                    
            }
            return(URL)
    }
}export default config;