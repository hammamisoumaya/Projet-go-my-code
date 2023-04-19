import React from 'react'
import './Dashborad.css'

import {Link} from 'react-router-dom'
const Dashborad = () => {
  return (
   <div className='bodydas '> 
   <>

  <div className="container">
    <div className="content">
      <section className="sidebar">
        <div className="logo">
          <i className="fa fa-instagram icon" aria-hidden="true" />
        </div>
        <nav>
          <ul className="menu-options">
            <li>
              {" "}
              <i className="fa fa-home icon" aria-hidden="true" />{" "}
            </li>
            <li className="selected">
              {" "}
              <i className="fa fa-th-large icon" aria-hidden="true" />{" "}
            </li>
            <li>
              {" "}
              <i className="fa fa-calendar icon" aria-hidden="true" />{" "}
            </li>
            <li>
              {" "}
              <i className="fa fa-comment-o icon" aria-hidden="true" />{" "}
            </li>
            <li>
              {" "}
              <i className="fa fa-clock-o icon" aria-hidden="true" />{" "}
            </li>
            <li>
              {" "}
              <i className="fa fa-user-o icon" aria-hidden="true" />{" "}
            </li>
            <li>
              {" "}
              <i className="fa fa-wrench icon" aria-hidden="true" />{" "}
            </li>
          </ul>
        </nav>
        <div className="more-options">
          <i className="fa fa-ellipsis-h icon" aria-hidden="true" />
        </div>
      </section>
      <section className="main-content">
        <div className="app">
          <div className="fab-icon"> + </div>
          <header className="sub-menu">
            <div className="title"> Projects </div>
            <ul className="menu">
              <li>
                {" "}
                <li><a><Link to={'/Addservice'}>Ajouter les services</Link></a></li>
                
              </li>
              <li className="selected">
                {" "}
                <li><a><Link to={'/Updateservice/:id'}>Update service</Link></a></li>
                
              </li>
              <li>
                {" "}
                <li><a><Link to={'/listservice'}>Liste des Services</Link></a></li>
                
              </li>
              <li>
                {" "}
                <li><a><Link to={'/Addcareer'}>Ajouter les career</Link></a></li>
                
              </li>
              <li>
                {" "}
                <li><a><Link to={'/Updatecareer/:id'}>Update les career</Link></a></li>
                
              </li>
              <li>
                {" "}
                <li><a><Link to={'/listcareer'}>Liste des career</Link></a></li>
                
              </li>
              
              <li><a><Link to={'/'}>Logout</Link></a></li>

            </ul>
            <div className="user-options">
              <div className="icon">
                {" "}
                <i className="fa fa-search" aria-hidden="true" />{" "}
              </div>
              <div className="icon">
                {" "}
                <i className="fa fa-bell-o" aria-hidden="true" />
                <div className="badge"> 3 </div>
              </div>
              <div className="icon user-img">
                {" "}
                <img
                  src="https://source.unsplash.com/36x36/?human"
                  alt="Image 001"
                />{" "}
              </div>
            </div>
          </header>
          <section className="app-content">
            <header>
              <div className="searchbox">
                <div className="icon">
                  {" "}
                  <i className="fa fa-search" aria-hidden="true" />{" "}
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search a project"
                  className="search-text"
                />
              </div>
              <div className="app-list-options">
                <div className="sort-dropdown">
                  {" "}
                  Sort by <span className="by"> Project progress </span>{" "}
                  <i className="fa fa-sort-amount-desc" aria-hidden="true" />
                  <div className="drop">
                    {" "}
                    <i className="fa fa-caret-down" aria-hidden="true" />{" "}
                  </div>
                </div>
                <div className="icon">
                  {" "}
                  <i className="fa fa-filter" aria-hidden="true" />{" "}
                </div>
                <div className="display-group">
                  <div className="icon">
                    {" "}
                    <i className="fa fa-bars" aria-hidden="true" />{" "}
                  </div>
                  <div className="icon selected">
                    {" "}
                    <i className="fa fa-th" aria-hidden="true" />{" "}
                  </div>
                </div>
              </div>
            </header>
            <ul className="projects">
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Création de site Web </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nous proposons la meilleure solution de création de site Web adapté à vos besoins. Et notre équipe de concepteurs Web talentueux crée des thèmes personnalisables, sécurisés et évolutifs pour une variété d'industries et de niches. Nous utilisons les meilleurs frameworks, tels que WordPress, Shopify, Magento, PHP ainsi que les dernières technologies nécessaires pour créer des fonctionnalités optimales et une expérience utilisateur (UX) parfaite pour votre site Web.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brand"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> 
Maintenance et mise à jour </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nous assurons la maintenance des sites Web et des plateformes CMS et nous vous offrons un soutien continu en prenant en charge divers aspects, comme les mises à jour, les modules complémentaires de sécurité, la recherche et la correction de toutes les failles de sécurité, les sauvegardes de votre site Web, les mises à jour régulières des plugins et nous fournissons des rapports de maintenance.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "64%" }}
                    data-value={64}
                  />
                  <progress max={100} value={64} data-value={64}>
                    {" "}
                    64%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days warning">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 4
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?icon"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Stratégie Social Média </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                   <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nous veillerons à ce que vous tiriez le meilleur parti de notre stratégie de médias sociaux. Grâce au développement de campagnes créatives, une gestion professionnelle et une stratégie personnalisée, notre service de Community Management peut aider votre entreprise à accroître la notoriété de sa marque tout en générant des revenus accrus à partir des plateformes sociales comme Facebook, Instagram, Yahoo ou Twitter...{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "59%" }}
                    data-value={59}
                  />
                  <progress max={100} value={59} data-value={59}>
                    {" "}
                    59%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days warning">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 5
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?adventure"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> 
Référencement naturel </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                    <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nos experts SEO améliorent la visibilité de votre site internet sur les moteurs de recherche comme Google, vous aidant à augmenter le trafic à atteindre plus de clients. Nos services de référencement SEO sont conçus pour promouvoir les sites Web de manière organique en optimisant plusieurs aspects, notamment le contenu, les balises de titre, les méta descriptions, les backlinks les balises d'en-tête et la génération de contenu de qualité.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "94%" }}
                    data-value={94}
                  />
                  <progress max={100} value={94} data-value={94}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 7
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?flower"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Ergonomie et design </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                   <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nous avons une approche totale de la création Web, de la stratégie et du design. Et nous combinons l'art et la technologie pour communiquer stratégiquement les valeurs de votre entreprise à travers notre service de conception graphique. Ainsi, nous nous basons sur les dernières technologies de Webdesign pour créer une image de marque captivante, une expérience utilisateur optimale (UX) et une identité d’entreprise cohérente qui capte votre public cible.{" "}
                  </p>
                </div>
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "44%" }}
                    data-value={44}
                  />
                  <progress max={100} value={44} data-value={44}>
                    {" "}
                    94%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 9
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    <img
                      src="https://source.unsplash.com/24x24/?humans"
                      alt="Image 001"
                    />
                  </div>
                </div>
              </li>
              <li className="project-item">
                <div className="logo-row">
                  {" "}
                  <img
                    src="https://source.unsplash.com/48x48/?brands"
                    alt="Image 001"
                  />
                  <div className="icon">
                    {" "}
                    <i
                      className="fa fa-ellipsis-h icon"
                      aria-hidden="true"
                    />{" "}
                  </div>
                </div>
                <div className="title-row">
                  <h3> Hébergement Web </h3>
                  <div className="links">
                    {" "}
                    <i
                      className="fa fa-external-link icon"
                      aria-hidden="true"
                    />{" "}
                   <a><Link to={'/listservice'}>ListService</Link></a>{" "}
                  </div>
                </div>
                <div className="desc-row">
                  <p>
                    {" "}
                    Nous proposons des solutions d’hébergement Web qui offrent les meilleures performances à un prix compétitif avec notre infrastructure sécurisée et fiable. Cela inclut des serveurs hautes performances, des mises à jour régulières et des correctifs de sécurité, des sauvegardes et une très haute disponibilité. Et nous fournissons des services d’enregistrement, de migration et de renouvellement de domaine ainsi que des outils de gestion de comptes de messagerie.{" "}
                  </p>
                </div>
               
                
                
                <div className="progress-row">
                  <p
                    className="value-label"
                    style={{ width: "32%" }}
                    data-value={32}
                  />
                  <progress max={100} value={32} data-value={32}>
                    {" "}
                    32%{" "}
                  </progress>
                </div>
                <div className="footer-row">
                  <div className="days danger">
                    {" "}
                    <i className="fa fa-clock-o icon" aria-hidden="true" /> 2
                    days left{" "}
                  </div>
                  <div className="users">
                    <img
                      src="https://source.unsplash.com/24x24/?human"
                      alt="Image 001"
                    />
                    
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  </div>
</>

 
  </div>
  
  
  )
}

export default Dashborad
