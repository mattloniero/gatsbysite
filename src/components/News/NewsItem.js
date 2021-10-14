import React from 'react'

const NewsItem = (item) => {
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    console.log(item);
    return (
        <>
            <figure className="card card-link">
                {
                    item.item.image && (
                    <img alt={item.item.name}
                        src={item.item.image.thumbnail.contentUrl} />
                    )
                }
                <figcaption>
                    <h2 className="title">
                        <a href={item.item.url}>{item.item.name}</a>
                    </h2>

                    <div className="meta">
                        <span className="meta-date">{formatDate(item.item.datePublished)}</span> 
                        <strong className="meta-provider">{item.item.provider[0].name}</strong>
                    </div>
                </figcaption>
            </figure>
        </>
    )
}

export default NewsItem
