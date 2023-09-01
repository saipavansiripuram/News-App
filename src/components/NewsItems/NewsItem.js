import React, { Component } from "react";

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="my-3">
          <div className="card" style={{ backgroundColor: "#E6EDf5 " }}>
            <span
              class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ marginLeft: -29, zIndex: "1" }}
            >
              {source}
            </span>
            <img
              src={
                !imageUrl
                  ? "https://timesofindia.indiatimes.com/thumb/msid-98398859,width-1200,height-900,resizemode-4/98398859.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title} </h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
