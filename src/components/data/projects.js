import ecommerce from '../../images/projects/ecommerce.png'
const ecomDescription = `# This is an online store *project* that uses **Django and Dockere**.

# Header- One

* Lists
* todo
* done

**A Story to Tell**
`
let description = `This is a short description of this project 
                    This is a short description of this project 
                    This is a short description of this project
                    This is a short description of this project 
                    This is a short description of this project 
                    This is a short description of this project
                    This is a short description of this project
                    This is a short description of this project
                    This is a short description of this project
                    This is a short description of this project 
                    This is a short description of this project
                    
                    `
const projects =
    [
        {
            "id": 1,
            "title": "Ecommerce Project",
            "summary": "This is a short description of this project",
            "desc": ecomDescription,
            "image": ecommerce,
            "stack": ["Django", "React"]
        },
        {
            "id": 2,
            "title": "Hospital Management",
            "summary": "This is a short description of this project",
            "desc": "Hospital Management Project",
            "image": ecommerce,
            "stack": ["Django", "React"]
        },
        {
            "id": 3,
            "title": "Hotel Project",
            "summary": "This is a short description of this project This is a short description of this project This is a short description of this project",
            "desc": "A Hotel booking website",
            "image": ecommerce
        },
        {
            "id": 4,
            "title": "Random Project",
            "summary": "This is a short description of this project",
            "desc": "A Hotel booking website",
            "image": ecommerce
        }
    ]



export default projects;