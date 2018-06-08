import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
//import 'www.googletagmanager.com/gtag/js?id=UA-18289054-3';

class Index extends Component {
  componentDidMount() {
    navigateTo(`/1`);
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'UA-18289054-3');
  }
  render() {
    return <div />;
  }
}
export default Index;
