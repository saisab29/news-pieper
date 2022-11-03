import React, { Component } from 'react'

export class NewItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className="my-3 ">
                <div className="card " >
                    <img src={!imageUrl ? "https://images.hindustantimes.com/img/2022/11/01/1600x900/breaking_blog_november_2_1667346818254_1667346818492_1667346818492.jpeg" : imageUrl} className="card-img-top" alt="image" />
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_url" className="btn btn-sm btn-primary">Full article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem
