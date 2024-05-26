import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/SearchPage.module.css";
import Card from "react-bootstrap/Card";

const SearchPagePost = ({ id, owner, profile_id, profile_image, image, title }) => {
  return (
    <Card className={styles.PostCard}>
      <Link to={`/posts/${id}`}>
        <Card.Img className={styles.PostImage} src={image} alt={title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200'; }} />
      </Link>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-center">
        <Link to={`/profiles/${profile_id}`} className="d-flex align-items-center justify-content-center">
          <Avatar src={profile_image} height={40} />
          <span className="ml-2">{owner}</span>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default SearchPagePost;
