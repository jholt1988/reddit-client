import React from 'react';
import Card from '../../elements/card/Card';
const styles = require('../../index.css')


export const  Post = (props) => {
    return(
        <Card className={styles.Post} key={props.key} post={props.post}>
            {/* vote-container goes here */}
            <div className={styles.Postwrapper}>
                <div className={styles.PostTitleWrapper} title={Post.title}>
                    <p className={styles.PostTitle}>{Post.title}</p>
                    
                    </div>

            </div>
        </Card>
    )
}