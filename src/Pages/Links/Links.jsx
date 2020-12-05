import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import data from '../../Services/api.json';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Input from '../../Components/Buttons/Input'
import './links.css';


export default function Links() {
  return (
    <div id="links-page">
      <Sidebar />
      <div class="links-page-api">
        <PageTitle
          pageTitle='Links'
        />
        <Input />
        <ul>
          {data.map(({ type, title, link }) => <li> <a href={link}>{type} - {title}</a> </li>)}
        </ul>
        <Footer />
      </div>
    </div>
  );
}