import React, { useEffect, useState } from 'react';
import NavTabs from './NavTabs';
import pageData from './pages';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';

const PortfolioContainer = () => {
  useEffect(() => {
    setCurrentPage(pathname);
  }, []);
  
  const { pathname } = window.location;
  const [currentPage, setCurrentPage] = useState('/');

  const handlePageChange = (page) => setCurrentPage(page);

  const pages = Object.keys(pageData);
  const data = { pages, currentPage, handlePageChange };
  const { PUBLIC_URL } = process.env;
  return (
    <BrowserRouter>
      <Header {...data} />
      <NavTabs {...data} />
      <Route path={`${PUBLIC_URL}/`} exact component={About} />
      <Route path={`${PUBLIC_URL}/portfolio`} exact component={Portfolio} />
      <Route path={`${PUBLIC_URL}/contact`} exact component={Contact} />
      <Route path={`${PUBLIC_URL}/resume`} exact component={Resume} />
      <Footer {...data} />
    </BrowserRouter>
  );
};

export default PortfolioContainer;