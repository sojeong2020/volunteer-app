import React from 'react';
import '../style/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Server-side routing
The server has views for every single route of our app.
User navigates to /about, the browser sends a GET request to /about and our server responds with the corresponding view.
Client-side routing
In React applications, the server provides a single HTML file (with an empty div) and a bundle of JavaScript. The rendering of the application happens client-side.
Because all the views of our application are already in the browser, we don't need to make GET requests to get different views.
We can use a router, a library that catches the changes in the URL and renders different components accordingly.
HTTP requests still happen in the background, but not for displaying views, just for getting or sending data to servers.
The page never reloads, components come and go from the DOM, giving the illusion of navigation.</p>
        </div>
    );
};

export default Footer;