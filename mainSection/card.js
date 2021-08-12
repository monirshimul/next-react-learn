import React, { Fragment } from 'react';
import styles from './card.module.css'

const card = props => {
    const { name, image, post } = props
    return (
        <Fragment>
            <div className={`card col-sm-4 p-3 ${styles.cardStyle}`}>
                <div className="text-center">
                    <img
                        src={image}
                        className="img-fluid img-thumbnail"
                        width="120px"
                        height="120px"
                        style={{ borderRadius: "60px" }}
                    />
                    <p>{name}, {post}</p>
                </div>

            </div>
        </Fragment>
    )
}

export default card
