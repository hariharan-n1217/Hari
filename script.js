
/* Reset */

* {

  margin: 0;

  padding: 0;

  box-sizing: border-box;

}

body {

  font-family: Arial, sans-serif;

  line-height: 1.6;

  background: #f4f4f4;

  color: #333;

}

/* Header */

header {

  background: black;

  color: white;

  padding: 15px 20px;

  text-align: center;

  position: sticky;

  top: 0;

  z-index: 1000;

}

header h1 {

  margin-bottom: 10px;

}

nav ul {

  display: flex;

  justify-content: center;

  list-style: none;

}

nav ul li {

  margin: 0 15px;

}

nav ul li a {

  color: white;

  text-decoration: none;

  font-weight: bold;

}

nav ul li a:hover {

  color: #f0a500;

}

/* Image Below Header */

.header-image {

  text-align: center;

  margin: 20px 0;

}

.header-image img {

  width: 120px;

  height: 120px;

  border-radius: 50%;

  border: 3px solid black;

  object-fit: cover;

}

/* Sections */

section {

  padding: 60px 20px;

  text-align: center;

  background: white;

  margin: 20px;

  border-radius: 10px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

}

/* Projects */

.project-list {

  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap: 20px;

}

.project {

  background: #fafafa;

  border: 1px solid #ddd;

  border-radius: 8px;

  padding: 20px;

  width: 250px;

  transition: transform 0.3s;

}

.project:hover {

  transform: translateY(-5px);

}

/* Contact Form */

form {

  display: flex;

  flex-direction: column;

  max-width: 400px;

  margin: auto;

}

form input, form textarea {

  margin: 10px 0;

  padding: 12px;

  border-radius: 5px;

  border: 1px solid #ccc;

}

form button {

  padding: 12px;

  border: none;

  border-radius: 5px;

  background: black;

  color: white;

  cursor: pointer;

}

form button:hover {

  background: #f0a500;

}

/* Footer */

footer {

  background: black;

  color: white;

  text-align: center;

  padding: 20px;

  margin-top: 30px;

}