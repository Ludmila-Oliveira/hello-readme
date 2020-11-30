import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import '../Styles/Pages/links.css';
import data from '../Services/api.json';
import PageTitle from '../Components/PageTitle/PageTitle';

export default function Links() {
  return (
    <div id="links-page">
      <Sidebar />
      <div class="links-page-api">
        <PageTitle
          pageTitle='Links'
        />
        <ul>
          {data.map(({ type, title, link }) => <li> <a href={link}>{type} - {title}</a> </li>)}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
