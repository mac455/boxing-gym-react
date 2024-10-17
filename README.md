## Boxing Gym Website - React 

This website is my first attempt at creating a fully functional website using React. 
I chose to build a website for a brand new boxing gym because I enjoy sport and it was fun to design. 

The site was built using React + Vite. 
The app is split into 6 components - Header, Body, Footer, Navbar, Layout and ScrollToTop.  Most are self-explantory. 

##ScrollToTop component 
This component is used to scroll the page to the top when changing routes 


## Layout component 

The 'Layout' component was created so specific components such as 'Navbar' could be displayed across all pages. 
Layout uses Outlet as a placeholder for the current route.  
    Navbar: A navigation bar that is displayed at the top of the layout.
    Outlet: A placeholder where the current route’s content will be rendered.
    Footer Section: A footer that is displayed at the bottom of the layout
In App.jsx, 
All other routes are wrapped in Layout routes becoming child routes of Layout. 
For example, When a user visits the root URL (/), the Layout component is rendered first. Inside Layout, the Navbar is displayed, and the Outlet is empty initially. Then, The Home component is matched and rendered inside the <Outlet />. So the user sees the Navbar, the content of the Home component, and the Footer_section below.
## Home page 

![image](https://github.com/user-attachments/assets/575394d2-22e8-4c27-94b2-6192536d7c71)


