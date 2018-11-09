import React from 'react'
 
const Category = ({name, score}) => (
    <section>
        Category : {name}
        <div>
            <span>Score : {score}</span>
        </div>
    </section>
);

export default Category;