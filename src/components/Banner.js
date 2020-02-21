import React from 'react'
import Button from "./Button";

export default function () {
    return <div className="banner row">
        <div className="col-md-7 col-xs-12 banner-content px-15">
            <h1 className="text-white">
                TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION
            </h1>
            <p className="content text-white">
                We kindly remind you that your test assignment should be submitted as a link to
                github/bitbucket repository.
                <span className="content-md">
                    &nbsp;Please be patient, we consider and respond to everyapplication
                    that meets minimum requirements.We look forward to your submission. Good luck!
                    The photo has to scale in the banner area on the different screens
                </span>
            </p>
            <Button clickHandle={() => {window.location.href = '#reg'}}>Sing up now</Button>
        </div>
    </div>;
}