import React from 'react';
import { useState } from 'react';
import './Project.css';
import img from '../../assets/avatar.jpg'
import posimg from '../../assets/pos.png';
import mvcimg from '../../assets/mvc.png';
import micimg from '../../assets/mic.png';
import Modal from '../Modal/Modal';
const projects = [
    {
        id: 1,
        title: 'E-shop Microservices',
        s_description: 'E-shop Microservices',
        github: 'https://github.com/minhlong7699/microservices',
description: `<h2>eShop Project Overview</h2>
<p>The eShop project is a comprehensive e-commerce solution designed following the microservices architecture. This approach ensures scalability, maintainability, and efficient management of various aspects of the application. Each service within the eShop system is responsible for a specific domain, enabling focused development and easy scalability.</p>

<h3>Services and Databases</h3>
<ul>
  <li><strong>Catalog Service</strong>: Manages the product listings, details, and categories. It utilizes a PostgreSQL database (<code>catalog-db</code>) to store and manage product information.</li>
  <li><strong>Basket Service</strong>: Handles user shopping carts, allowing users to add, update, and remove items. This service also uses PostgreSQL (<code>basket-db</code>) for data storage.</li>
  <li><strong>Distributed Cache Service</strong>: Enhances performance by caching frequently accessed data using Redis (<code>distributedcache</code>).</li>
  <li><strong>Discount Service</strong>: Manages discount and promotional information. This service uses a Microsoft SQL Server (<code>discount-db</code>) for its database needs.</li>
  <li><strong>Ordering Service</strong>: Handles order processing, payment, and tracking. It relies on Microsoft SQL Server (<code>ordering-db</code>) for order data management.</li>
</ul>

<h3>Inter-Service Communication</h3>
<p>The microservices in the eShop project interact with each other through RabbitMQ, utilizing MassTransit or gRPC for efficient and reliable messaging. This setup ensures that the services can communicate asynchronously, promoting loose coupling and high availability.</p>

<h3>Architectural Principles</h3>
<p>The project adheres to Clean Architecture principles, ensuring that the codebase is modular, testable, and easy to maintain. Additionally, Domain-Driven Design (DDD) is employed to model the business domain accurately, reflecting real-world scenarios and enhancing the robustness of the application.</p>`,
        image: micimg // Thay thế bằng đường dẫn đúng đến hình ảnh
    },
    {
        id: 2,
        title: 'Pos System (Restfull Api best practices)',
                s_description: 'Pos System',
        github: 'https://github.com/minhlong7699/PosSystem',
description: `<h2>POS System Project Overview</h2>
<p>The POS System project is a robust point-of-sale solution developed using ASP.NET 7, following the principles of Onion Architecture. This architecture ensures a high level of separation of concerns, making the system maintainable, testable, and scalable.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>User Authentication</strong>: Implements JWT (JSON Web Token) authentication to securely manage user sessions and ensure that only authorized personnel can access the system.</li>
  <li><strong>RESTful API Best Practices</strong>: Adheres to industry best practices for building RESTful APIs, including proper use of HTTP methods, status codes, and structuring endpoints for scalability and maintainability.</li>
</ul>

<h3>Onion Architecture</h3>
<p>The POS System is designed using Onion Architecture, which promotes a clear separation of core business logic, domain entities, and infrastructure concerns. This approach enhances the modularity and flexibility of the system, allowing easy integration of new features and technologies.</p>
<ul>
  <li><strong>Core Layer</strong>: Contains the domain entities and business logic, which are independent of any external frameworks or technologies.</li>
  <li><strong>Application Layer</strong>: Manages application services, DTOs, and business rules, coordinating between the core layer and the external layers.</li>
  <li><strong>Infrastructure Layer</strong>: Handles interactions with external systems, including databases, messaging systems, and third-party services.</li>
  <li><strong>Presentation Layer</strong>: Provides the user interface and API endpoints, facilitating user interactions and data input/output.</li>
</ul>

<p>The system is built to ensure robustness, security, and performance, making it an ideal solution for businesses looking to streamline their sales processes and improve overall efficiency.</p>`,
        image: posimg // Thay thế bằng đường dẫn đúng đến hình ảnh
    },
    {
        id: 3,
        title: 'Fast-food website',
                s_description: 'Fast-food website',
        github: 'https://github.com/minhlong7699/fast-food-ecommerce-website',
description: `<h2>Online Food Ordering System Overview</h2>
<p>The Online Food Ordering System is a dynamic web application developed using ASP.NET 7 MVC. This project provides a seamless platform for users to order food online, with full CRUD (Create, Read, Update, Delete) functionality and role-based access control.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>User Authentication and Authorization</strong>: Implements role-based access control to manage user permissions. Regular users can browse and order food, while admin users have additional privileges to manage the system.</li>
  <li><strong>CRUD Operations</strong>: Allows users to create, read, update, and delete orders. Admin users can also add, update, and delete food items and manage user accounts.</li>
  <li><strong>Admin Panel</strong>: Provides an interface for admin users to add new products, update existing products, and manage the overall food menu efficiently.</li>
</ul>

<h3>Technologies Used</h3>
<p>The system leverages the ASP.NET 7 MVC framework, ensuring a robust and scalable application. The use of MVC architecture promotes a clear separation of concerns, making the application easier to maintain and extend.</p>
<ul>
  <li><strong>ASP.NET 7 MVC</strong>: Utilized for building the web application, providing a clean separation of business logic, user interface, and data access.</li>
  <li><strong>Entity Framework Core</strong>: Used for database interactions, enabling efficient data manipulation and retrieval.</li>
  <li><strong>SQL Server</strong>: The primary database for storing user information, orders, and product details.</li>
  <li><strong>Razor Pages</strong>: Used for creating dynamic web pages with a combination of HTML, CSS, and C#.</li>
</ul>

<p>This system aims to streamline the food ordering process, offering a user-friendly interface for customers and powerful tools for administrators to manage the food menu and user accounts.</p>`,
        image: mvcimg // Thay thế bằng đường dẫn đúng đến hình ảnh
    }
];

const Projects = () => {

const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleMoreDetails = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <>
            <hr className="divider" id="project" />
        <div className="title">
            <h2>Projects</h2>
        </div>
        <div className="projects-container" id="projects">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-description">{project.s_description}</div>
                        <button className="project-button" onClick={() => handleMoreDetails(project)}>More Details</button>
                    </div>
                ))}
            </div>
            <Modal show={showModal} onClose={handleCloseModal} project={selectedProject} />
        </div>
        </>
    );
}

export default Projects;
