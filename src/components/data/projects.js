import ecommerce from '../../images/projects/ecommerce.png'
import dev_hosp from '../../images/projects/dev_hosp.png'
import portfolio from '../../images/projects/portfolio.png'
const ecomDescription = `This is a basic e-commerce project I built using Django. 
                        I used Django's templating to serve the frontend and TailwindCSS
                        to style the pages. CSS configurations can be found inside the static/css 
                        directory. You can also use the TailwindCSS CDN if you don't want to install 
                        it locally.



* Lists
* todo
* done

**A Story to Tell**
`
let ecomDesc = `This is a simple e-commerce project I built with Django.
                   It allows users to view items, add them to cart, view cart, 
                   checkout and view order history. It also allows you to signup for 
                   an account and login/logout to access certain features. 
                    
                    `
const hosp_desc = `
                    A hospital management tool that allows patients to 
                    book appoointments, view their own medical records and history. 
                    They get downloadable invoices for every visit. Doctors also have a dashboard
                    where they can see their patients. The application was built with Django and 
                    is getting new features added every time. 
                    `
const portfolio_desc = `
                        This is my portfolio site. I built it using React and React Hooks for state management.
                        It is hosted on Netlify with a custom domain.
                        `
const projects =
    [
        {
            "id": 1,
            "title": "Ecommerce Project",
            "summary": "This is an e-commerce website that allows customers to shop and order items",
            "desc": ecomDesc,
            "image": ecommerce,
            "stack": ["Django", "React", "TailwindCSS"],
            "link": "https://ecom-1100.herokuapp.com/products/",
            "github": "https://github.com/Rone10/ecommerce"
        },
        {
            "id": 2,
            "title": "Hospital Management",
            "summary": "A hospital management system where patients can book appointments, view medical records and pay for hospital bills",
            "desc": hosp_desc,
            "image": dev_hosp,
            "stack": ["Django", "TailwindCSS"],
            "github": "https://github.com/Rone10/hospital_mgt"
        },
        {
            "id": 3,
            "title": "Portfolio",
            "summary": "This is my portfolio site I built using React",
            "desc": portfolio_desc,
            "image": portfolio,
            "stack": ["React", "React Hooks", "TailwindCSS",],
            "link": "https://haruna.me/",
            "github": "https://github.com/Rone10/react-portfolio",
        },
        // {
        //     "id": 4,
        //     "title": "Random Project",
        //     "summary": "This is a short description of this project",
        //     "desc": "A Hotel booking website",
        //     "image": ecommerce
        // }
    ]



export default projects;