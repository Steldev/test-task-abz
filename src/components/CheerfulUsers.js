import React from 'react'
import Button from "./Button";
import User from "./User";

export default function (props) {
    return <div className="cheerful-users text-center">
        <h1>Our cheerful users</h1>
        <h2>Attention! Sorting users by registration date</h2>
        {props.users && !!props.users.length && <div className="row">
                {props.users.map((user, index) =>
                        <User
                            className="col-xs-12 col-sm-6 col-md-4"
                            key={index}
                            photo={user.photo}
                            name={user.name}
                            position={props.positions[user.position - 1] || user.position}
                            email={user.email}
                            phone={user.phone}
                        />
                    )
                }
                {props.showMoreButton && <div className="button-wrapper">
                        <Button clickHandle={props.fetchUsersRequest}>Show More</Button>
                    </div>
                }
            </div>
        }

    </div>;
}