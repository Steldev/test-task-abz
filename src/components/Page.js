import React from 'react';
import '../sass/Page.scss';

import NavContainer from './NavContainer';
import Banner from "./Banner";
import Sector from './Sector';
import CheerfulUsersContainer from "./CheerfulUsersContainer";
import RegFormContainer from "./RegFormContainer";

export default function () {
    return  <div className="Page">
        <NavContainer />
        <Banner />
        <Sector bgColor="bg-white">
            <div className="row px-15 man-laptop-sector">
                <h1 className="col-md-12 text-center mt-0">Let's get acquainted</h1>
                <div className="col-sm-5 col-xs-12 man-laptop-wrapper">
                    <div className="man-laptop">
                    </div>
                </div>
                <div className="col-sm-7 col-xs-12 man-laptop-content">
                    <h2 className="mt-0">I am cool frontend developer</h2>
                    <p className="text-justify mb-40">
                        We will evaluate how clean your approach to writing CSS and Javascript code is.
                        You can use any CSS and Javascript 3rd party libraries without any restriction.
                        <br /><br />
                        If 3rd party css/javascript libraries are added to the project via bower/npm/yarn
                        you will get bonus points. If you use any task runner (gulp/webpack) you will get
                        bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.
                    </p>
                    <a href="#reg" className="text-primary">Sing up now</a>
                </div>
            </div>
        </Sector>
        <Sector bgColor="bg-pearl"><CheerfulUsersContainer /></Sector>
        <Sector bgColor="bg-white text-center" id="reg">
            <h1 className="px-15">Register to get a work</h1>
            <p className="px-15 mb-40">Attention! After successful registration and alert,
                update the list of users in the block from the top</p>
            <RegFormContainer />
        </Sector>

        <footer>
            <hr />
            <p>© abz.agency specially for the test task</p>
        </footer>
    </div>;
}