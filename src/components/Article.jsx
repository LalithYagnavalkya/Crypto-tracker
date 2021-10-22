import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";

const Article = ({
  datePublished,
  description,
  image,
  mentions,
  name,
  provider,
}) => {
  return (
    <Card>
      <a
        target="_blank"
        href={
          "//www.telegraph.co.uk/money/consumer-affairs…rrency-bitcoin-how-work-what-mistakes-avoid-2021"
        }
      >
        <article>
          <div className="header">
            <h1>{name}</h1>
            <img
              src={
                image
                  ? image.thumbnail.contentUrl
                  : "https://iitpkd.ac.in/sites/default/files/default_images/default-news-image_0.png"
              }
              alt={""}
            />
          </div>
          <div className="content">
            <p>
              {description > 100
                ? `${description.substring(0, 100)}...`
                : description}
            </p>
          </div>
          <div className="footer">
            <div className="aurthor">
              <img
                src={
                  provider[0].image
                    ? provider[0].image.thumbnail.contentUrl
                    : "https://iitpkd.ac.in/sites/default/files/default_images/default-news-image_0.png"
                }
                alt={""}
              />
              <p>{provider[0].name}</p>
            </div>
            <div className="time">
              {moment(datePublished).startOf("ss").fromNow()}
            </div>
          </div>
        </article>
      </a>
    </Card>
  );
};

const Card = styled.div`
  background-color: #1e1e1e;
  text-transform: none;
  min-width: 270px;
  max-width: 350px;
  height: auto;
  margin: 1rem 0.2rem;
  display: flex;
  justify-content: stretch;
  border-radius: 30px;
  flex-wrap: wrap;
  letter-spacing: 1px;
  transition: 0.5s;
  :hover {
    background-color: #292929;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  article img {
    margin: 10px 20px;
    padding: 3px;
    max-width: 200px;
    max-height: 100px;
    border-radius: 10px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: -20px;

    padding: 3px 0px 3px 17px;
    /* color: inherit; */
    color: #e1e1e1;
  }
  .content {
    text-align: justify;
    /* margin: 24px 14px; */
    margin-bottom: 40px;
  }
  .content p {
    font-size: 17px;
    font-weight: 900;
    color: #929292;
    /* color: #e9e5e5; */
    padding: 1rem;
    /* margin-left: 12px; */
  }

  .header a {
    color: inherit;
    margin: 0;
    text-decoration: none;
    font-size: 1.2rem;
  }
  .header h1 {
    /* opacity: 87%; */
    /* color: #ffffff; */
  }

  .footer {
    /* padding: 0 15px; */
    font-weight: 900;
    color: #909090;
    margin-right: 1.6rem;
    margin-left: -7px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellow; */
    /* transform: translateY(-30px); */
    /* padding-bottom: 20px; */
    bottom: 0;
  }
  font-weight: 800;
  .aurthor {
    display: flex;
    align-items: center;
    /* background-color: beige; */
    justify-content: space-around;
  }
  .aurthor p {
    font-size: small;
    margin-left: 10px;
  }
  .time {
    font-size: small;
  }
  .aurthor img {
    max-height: 35px;
    margin-right: -5px;
  }
`;

export default Article;
